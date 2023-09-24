/**
 * There are 16 hourglasses in array. An hourglass sum is the sum of an hourglass' values.
 * Calculate the hourglass sum for every hourglass in , then print the maximum
 * hourglass sum. The array will always be 6 x 6.
 */
function hourglassSum(arr: number[][]): number {
  let maxSum = -63;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      //row 1 (1-1-1)
      let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      //row 2 (-1-)
      sum += arr[i + 1][j + 1];
      //row 3 (1-1-1)
      sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

      maxSum = Math.max(sum, maxSum);
    }
  }

  return maxSum;
}

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

// console.log(hourglassSum(arr));
