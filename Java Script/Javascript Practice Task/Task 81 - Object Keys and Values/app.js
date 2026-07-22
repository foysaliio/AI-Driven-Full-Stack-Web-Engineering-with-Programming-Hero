const book = {
  title: "The Hobbit",
  author: "Tolkien",
  pages: 310,
};

const bookKeys = Object.keys(book);
const bookValues = Object.values(book);

console.log(bookKeys);
console.log(bookValues);

delete book.pages;

console.log(book);
