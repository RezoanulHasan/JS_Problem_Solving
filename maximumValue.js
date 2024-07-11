//Write a function that takes an array of numbers and returns the maximum value.

const numbers = [1, 2, 3, 4, 5];

const findMaxValue = (arr) => {
  return Math.max(...arr);
};

const maxValue = findMaxValue(numbers);
console.log(maxValue);
