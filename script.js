const result = document.querySelector(".container-resultado");
const btnR = document.querySelector("button");
const inputNum = document.querySelector(".inputNum");
const valorNum = document.querySelector(".valorNum");
const divTeste = document.querySelector(".test");
const resultadoP = document.createElement("p");

let isExist;
let valor;
let valorV;
let arrayV = 0;
let contador;

function transformIntArray(int) {
  const ArrayInt = int.split(",").map(Number);
  arrayV = ArrayInt;
}

function buscaBinaria(lista, item) {
  let count = 0;
  let baixo = 0;
  let alto = lista.length - 1;

  while (baixo <= alto) {
    isExist = true;
    count += 1;
    contador = count;
    let meio = (baixo + alto) / 2;
    let meio2 = Math.round(meio);
    let chute = lista[meio2];

    if (chute == item) {
      return meio2;
    }
    if (chute > item) {
      alto = meio2 - 1;
    } else {
      baixo = meio2 + 1;
    }
  }
  isExist = false;
  return null;
}

btnR.addEventListener("click", () => {
  valor = inputNum.value;
  transformIntArray(valor);
  valorV = +valorNum.value;
  const busca = buscaBinaria(arrayV, valorV);
  if (valorV === 0 || valor === null) {
    isExist = false;
  }

  if (isExist) {
    resultadoP.innerHTML = `Foram <span>${contador}</span> palpites para chegar no número de posição <span>${busca}</span>`;
  } else {
    resultadoP.innerHTML = `<span>Coloque um número que exista na lista</span> `;
  }
  divTeste.appendChild(resultadoP);
});
