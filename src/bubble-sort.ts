function bubbleSort(array: number[]): number[] {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

console.log(bubbleSort([-6, 20, 8, -2, 4, 8]));
