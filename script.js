let myLibrary = [];

const shelf = document.querySelector(".book-container");
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

formExitButton.addEventListener("click", () => {
  hideForm();
  clearFormInputs();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary();
  displayBooks();
  hideForm();
  clearFormInputs();
  addButtonsToBooksOnDisplay();
  setBookIndex();
  labelReadStatusButtons();
})


function Book(title, author, pages, read, genre) {
// the constructor...
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read;
  this.genre = genre;
}

Book.prototype.getReadStatus = function() {
  return this.read;
}

Book.prototype.changeReadStatus = function() {
  const readStatus = this.read;

  if(readStatus == "Read") {
    this.read = "Not read";
  } else if(readStatus == "Not read") {
    this.read = "Read";
  }
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

// function setBookIndex(book, counter) {
//     book.setAttribute("data-index", `${counter}`);
// }


function setBookIndex() {
  for(let i = 0; i < myLibrary.length; i++) {
      getBooksOnDisplay()[i].setAttribute("data-index", `${i}`);
  }
};

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
    // setBookIndex(book, i);
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

function getBooksOnDisplay() {
  return document.querySelectorAll(".book");
}

function addButtonsToBooksOnDisplay() {
  createRemoveButton();
  createReadStatusButton();
}

function createRemoveButton() {
  getBooksOnDisplay().forEach(book => {
    const removeBookButton = document.createElement("button"); //creates button
    removeBookButton.textContent = "Remove"; //adds "remove" inside the button
    removeBookButton.classList.add("removeBookButton"); //gives button the removeBookButton css class

    
    removeBookButton.addEventListener("click", (e) => {
      const parentIndex = e.target.parentNode.getAttribute("data-index"); //gets index of book
      e.target.parentNode.remove(); //removes book from display
      myLibrary.splice(parentIndex, 1); //removes book from myLibrary array
      setBookIndex();// reindexes books
    });

    book.appendChild(removeBookButton);
  });
}



function createReadStatusButton() {
getBooksOnDisplay().forEach(book => {
  const readStatusButton = document.createElement("button");
  readStatusButton.classList.add("readStatusButton");
  book.appendChild(readStatusButton);
  console.log(book.dataset.index);
  
})
//find a way to set textContent to equal the books read status
//i think I can get the book index, slap it in -> myLibrary[book index] -> get value with myLibrary[bookIndex].read -> put that into the text content;
}

function labelReadStatusButtons() {
  const readStatusButtons = document.querySelectorAll(".readStatusButton");
  readStatusButtons.forEach((button) => {
  const buttonIndex = button.parentNode.dataset.index;
  button.textContent = myLibrary[buttonIndex].read;

    
  });
};
