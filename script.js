let myLibrary = [];

const shelf = document.querySelector(".book-container");
const bookOnShelf = document.querySelector(".book");
const form = document.querySelector("form");

const addBookButton = document.querySelector("#add-book");
const formExitButton = form.querySelector(".exit");
const submitButton = form.querySelector("button[type=submit]");

const bookTitle = document.querySelector("#bookTitle");
const bookPages = document.querySelector("#bookPages");
const bookAuthor = document.querySelector("#bookAuthor");
const bookReadStatus = document.querySelector("#readStatus");
const bookGenre = document.querySelector("#bookGenre");

// take form.value's and then put them into the book constructor. 


addBookButton.addEventListener("click", () => {
  //addBookToLibrary();
  form.classList.add("active");
});

formExitButton.addEventListener("click", () => hideForm());

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary();
  displayBooks();
  hideForm();
  clearFormInputs();
  addButtonToBooksOnDisplay();
})


function Book(title, author, pages, read, genre) {
// the constructor...
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read;
  this.genre = genre;
}
/** No need for getting info from prompts/different funciton
 * 
function getBookInfo() {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const read = bookReadStatus.value;
  
  const infoArray = [title, author, pages, read];
  console.log(infoArray);
  return infoArray;
}
*/

function hideForm() {
  form.classList.remove("active")
}

function createBook() {
  return new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookReadStatus.value, bookGenre.value);
}

function addBookToLibrary() {
  const newBook = createBook();
  myLibrary.push(newBook);
}
function setBookIndex(book, counter) {
    book.setAttribute("data-index", `${counter}`);
}

function clearDisplay() {
  const removeDomBooks = document.querySelectorAll(".book-container > *");
  removeDomBooks.forEach(book => book.remove());
  
}

//loops through myLibrary array and displays each book
function displayBooks() {
  clearDisplay();
  
   
  for(let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    book.className = "book";
    book.innerText = myLibrary[i].title;
    setBookIndex(book, i);
    shelf.appendChild(book);
  }
}

function clearFormInputs() {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookReadStatus.value = "";
  bookGenre.value = "";
}

function addButtonToBooksOnDisplay() {
  const booksOnDisplay = document.querySelectorAll(".book");

  booksOnDisplay.forEach(book => {
    const removeBookButton = document.createElement("button");
    removeBookButton.textContent = "Remove";
    removeBookButton.classList.add("removeBookButton");
    book.appendChild(removeBookButton)
  });
}