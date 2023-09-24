function binarySearch(array: number[], target: number): number {
  const length = array.length;

  let medium = 0;

  if (length > 1) {
    medium = Number((length / 2).toFixed());
  }

  const start = target > medium ? medium : 0;
  const end = target > medium ? length : medium;

  console.log("STARTING FROM: ", target > medium ? "MIDDLE" : "BEGINNING");
  console.log("ENDING ON: ", end);

  for (let i = start; i < end; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log("BINARY SEARCH", binarySearch([0, 3, 4, 5, 6, 8].sort(), 3));
