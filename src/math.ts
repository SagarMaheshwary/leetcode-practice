function fibonacci(n: number): number[] {
  const arr: number[] = [0, 1];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
}

function factorial(n: number): number {
  let result: number = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(2));

function powerOfTwo(n: number): boolean {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
}

console.log("POWER OF TWO ", powerOfTwo(1));
