function sumAllNumbersInRange(arr) {
  let sum = 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }
  return sum;
}

sumAllNumbersInRange([1, 4]);
