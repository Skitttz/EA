export const quickSort = (targetArray) => {
  if (targetArray.length <= 1) {
    return targetArray;
  }

  let pivot = targetArray[0];
  let leftArrayElements = [];
  let rightArrayElements = [];

  for (let i = 1; i < targetArray.length; i++) {
    if (targetArray[i]) {
      if (targetArray[i] < pivot) {
        leftArrayElements.push(targetArray[i]);
      } else {
        rightArrayElements.push(targetArray[i]);
      }
    }
  }

  return [
    ...quickSort(leftArrayElements),
    pivot,
    ...quickSort(rightArrayElements),
  ];
};
