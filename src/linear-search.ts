function findIndex(array: number[], target: number): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

// console.log(findIndex([0, 23, 4, 55], 8));
