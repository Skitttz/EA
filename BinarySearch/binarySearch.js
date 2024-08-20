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
  resultDiv.innerHTML = '';
  const statusMessage = {
    sucess: {
      message: `
      Foram <span>${searchResult && searchResult.counter}</span> 
      palpites para chegar no número de posição 
      <span>${searchResult && searchResult.position}</span>`,
    },
    error: {
      notFoundInputValue: {
        message: '<span>Ops! Insira valores nos campos correspondentes</span>',
      },
      notExistInArray: {
        message:
          '<span>Coloque um número que exista na Array de valores</span>',
      },
    },
  };
  const resultMessage = document.createElement('p');
  if (searchResult && resultDiv) {
    const sortedArrayElement = document.createElement('code');
    sortedArrayElement.textContent = array.join(' ');
    resultMessage.innerHTML = statusMessage.sucess.message;
    resultDiv.classList.add(activeClass);
    resultDiv.appendChild(sortedArrayElement);
  } else if (!inputArrayField.value || !targetValueField.value) {
    resultMessage.innerHTML = statusMessage.error.notFoundInputValue.message;
  } else {
    resultMessage.innerHTML = statusMessage.error.notExistInArray.message;
  }

  resultDiv.appendChild(resultMessage);
}

searchButton.addEventListener('click', () => {
  const inputArray = transformArray(inputArrayField.value);
  const targetValue = Number(targetValueField.value);
  const searchResult = binarySearch(inputArray, targetValue);

  displayResult(inputArray, searchResult);
});
