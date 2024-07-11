//Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6];

const sumOfEvens = (arr) => {
  return arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc += num;
    }
    return acc;
  }, 0);
};

const evenSum = sumOfEvens(numbers);
console.log(evenSum);
