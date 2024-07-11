//Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Rezoanul", age: 25, gender: "male" },
  { name: "Riya", age: 22, gender: "female" },
  { name: "Hasan", age: 30, gender: "male" },
  { name: "Akther", age: 28, gender: "female" },
];

const getMaleNames = (arr) => {
  return arr
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
};

const maleNames = getMaleNames(people);
console.log(maleNames);
