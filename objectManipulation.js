//Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
const books = [
  { title: "Book One", author: "Author One", year: 2001 },
  { title: "Book Two", author: "Author Two", year: 2002 },
  { title: "Book Three", author: "Author Three", year: 2003 },
];

const getBookTitles = (arr) => {
  return arr.map((book) => book.title);
};

const bookTitles = getBookTitles(books);
console.log(bookTitles);
