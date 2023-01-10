module.exports = function reverse(n) {
  let reverseNumber = 0;
  let lastInteger;
  let positiveNumber = Math.abs(n);

  while (positiveNumber != 0) {
    lastInteger = positiveNumber % 10;
    reverseNumber = reverseNumber * 10 + lastInteger;
    positiveNumber = Math.floor(positiveNumber / 10);
  }
  return reverseNumber;
}