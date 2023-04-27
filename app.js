let myLibrary = [];

function addBookToLibrary(obj) {
  return myLibrary.push(obj);
}

function Book(title, author, nPages, read) {
  this.title = title;
  this.author = author;
  this.nPages = nPages;
  this.read = read;
}

const newBook = new Book('Game of Thrones', 'George RR Martin', '830', true);

const sampleBook1 = {
  title: 'Game of Thrones',
  author: 'George RR Martin',
  nPages: 820,
  read: true,
};
const sampleBook2 = {
  title: 'Red Rising',
  author: 'Pierce Brown',
  nPages: 450,
  read: true,
};
const sampleBook3 = {
  title: 'Emil i Lönneberga',
  author: 'Astrid Lindgren',
  nPages: 130,
  read: false,
};

function displayBooks() {}
