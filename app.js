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

addBookToLibrary(sampleBook1);
addBookToLibrary(sampleBook2);
addBookToLibrary(sampleBook3);

function displayBooks(arr) {
  arr.forEach((book) => {
    const card = document.createElement('div');
    const titleDiv = document.createElement('div');
    const ul = document.createElement('ul');
    const authorLi = document.createElement('li');
    const pagesLi = document.createElement('li');
    const readLi = document.createElement('li');

    card.classList.add('card');
    card.setAttribute('style', 'width: 18rem');
    titleDiv.classList.add('card-header', 'fs-3', 'fw-bold');
    ul.classList.add('list-group', 'list-group-flush');
    authorLi.classList.add('list-group-item');
    pagesLi.classList.add('list-group-item');
    readLi.classList.add('list-group-item');

    titleDiv.textContent = book.title;
    authorLi.textContent = book.author;
    pagesLi.textContent = book.nPages;
    readLi.textContent = book.read ? 'Read' : 'Not read';

    ul.append(authorLi);
    ul.append(pagesLi);
    ul.append(readLi);

    card.append(titleDiv);
    card.append(ul);

    const mainContainer = document.querySelector('.container');
    mainContainer.append(card);
  });
}
