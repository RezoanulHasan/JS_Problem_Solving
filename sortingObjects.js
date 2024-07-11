//Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.//const cars = [
const cars = [
  { make: "BMW", model: "T90", year: 2012 },
  { make: "TATA", model: "H15", year: 2002 },
  { make: "Ford", model: "FX11", year: 2024 },
];

const sortCarsByYear = (arr) => {
  return arr.sort((a, b) => a.year - b.year);
};

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
