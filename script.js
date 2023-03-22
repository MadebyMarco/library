let myLibrary = [];
const addBookButton = document.querySelector("#add-book");
const shelf = document.querySelector(".book-container");
const bookOnShelf = document.querySelector(".book");

addBookButton.addEventListener("click", () => {
  addBookToLibrary();
});

function Book(title, author, pages, read) {
// the constructor...
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read;
}




function getBookInfo() {
  const title = prompt("Enter a book title.", "Title");
  const author = prompt("Enter the author's name.", "Name");
  const pages = prompt("Enter the number of pages it has.", 0);
  const read = prompt("Have you read this book?", "Yes or No");
  
  const infoArray = [title, author, pages, read];
  return infoArray;
}

function createBook() {
  const bookInfo = getBookInfo();
  return new Book(bookInfo[0], bookInfo[1],bookInfo[2], bookInfo[3]);
}

function addBookToLibrary() {
  const newBook = createBook();
  myLibrary.push(newBook);
}

//loops through myLibrary array and displays each book

function displayBooks() {
  const counter = myLibrary.length;

  for(let i = 0; i < counter; i++) {
    const book = document.createElement("div");
    book.className = "book";
    book.innerText = myLibrary[i].title;
    shelf.appendChild(book);
  }

}

function createBookCardElements() {
  bookOnShelf.appendChild(document.createElement("p"));
}