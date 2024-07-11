//Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = (arr) => {
  return [...new Set(arr)];
};

const uniqueArray = uniqueNumbers(numbersWithDuplicates);
console.log(uniqueArray);
