function fizzBuzz(num1, num2) {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);

  const result = [];

  for (let i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

module.exports = fizzBuzz