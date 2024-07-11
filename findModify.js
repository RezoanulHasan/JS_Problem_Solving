//Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const persons = [
  { name: "Rezoanul", age: 25 },
  { name: "Hasan", age: 20 },
  { name: "Riad", age: 23 },
];

const modifyAge = (arr, personName, newAge) => {
  const person = arr.find((person) => person.name === personName);
  if (person) {
    person.age = newAge;
  }
  return arr;
};

const updatedPersons = modifyAge(persons, "Hasan", 50);
console.log(updatedPersons);
