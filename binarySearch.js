import { quickSort } from './utils/quickSort.js';

const searchButton = document.querySelector('button');
const inputArrayField = document.querySelector('.inputNum');
const targetValueField = document.querySelector('.valorNum');
const resultDiv = document.querySelector('.result');
const activeClass = 'active';

function transformArray(input) {
  const transformInArray = input.split(' ').reduce((acc, curr) => {
    acc.push(parseInt(curr));
    return acc;
  }, []);
  const sorted = quickSort(transformInArray);
  return sorted;
}

function binarySearch(targetArray, targetValue) {
  let initial = 0;
  let end = targetArray.length - 1;
  let counter = 0;

  while (initial <= end) {
    counter++;
    const mid = Math.floor((initial + end) / 2);
    const guess = targetArray[mid];

    if (guess === targetValue) {
      return { position: mid, counter };
    } else if (guess > targetValue) {
      end = mid - 1;
    } else {
      initial = mid + 1;
    }
  }
  return null;
}

function displayResult(array, searchResult) {
  if (!searchResult || !array) {
    return;
  }
  resultDiv.innerHTML = '';
  const resultMessage = document.createElement('p');

  if (searchResult && resultDiv) {
    const sortedArrayElement = document.createElement('code');
    sortedArrayElement.textContent = array.join(' ');
    resultMessage.innerHTML = `
      Foram <span>${searchResult.counter}</span> 
      palpites para chegar no número de posição 
      <span>${searchResult.position}</span>`;
    resultDiv.classList.add(activeClass);
    resultDiv.appendChild(sortedArrayElement);
  } else {
    resultMessage.innerHTML = `<span>Coloque um número que exista na lista</span>`;
  }

  resultDiv.appendChild(resultMessage);
}

searchButton.addEventListener('click', () => {
  const inputArray = transformArray(inputArrayField.value);
  const targetValue = Number(targetValueField.value);
  const searchResult = binarySearch(inputArray, targetValue);

  displayResult(inputArray, searchResult);
});
