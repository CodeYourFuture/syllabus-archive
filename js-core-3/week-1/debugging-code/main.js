const addButtons = document.querySelectorAll(".add-button");
const formContainer = document.getElementById("form-container");
const tableBody = document.getElementById("table-body");
const submitted = document.getElementById("submitted");

let bookNumber = 0;
let myLibrary = [];

const book1 = new Book(
  "Crime and punishment",
  "Fyodor Dostoyevksy",
  671,
  "Yes"
);
const book2 = new Book("A brief history of time", "Stephen Hawking", 212, "No");

myLibrary.push(book1);
myLibrary.push(book2);

render();

addButtons.forEach((button => {
  button.addEventListener("click", () => {
    formContainer.style.display = "block";
  });
});

function addDeleteButtons() {
  let deleteButtons = document.querySelectorAll(".delete");

  deleteButtons.forEach((button) => {
    if (button.getAttribute("data-book") == bookNumber) {
      //Only add eventListeners to new books
      button.addEventListener("click", () => {
        deleteBook(button.getAttribute("data-book"));
      });
    }
  });
}

function addReadButtons() {
  let readButtons = document.querySelectorAll(".change-read");

  readButtons.forEach((button) => {
    if (button.getAttribute("data-book") == bookNumber) {
      button.addEventListener("click", () => {
        changeReadStatus(button.getAttribute("data-book"), button);
      });
    }
  });
}

function deleteBook(number) {
  let toDelete = document.querySelector(`tr[data-book="${number}"]`);
  toDelete.remove();
}

function changeReadStatus(number, button) {
  if (myLibrary[number]["read"] === "Yes") {
    myLibrary[number]["read"] = "No";
    button.innerText = "No";
    button.classList.remove("button-green");
    button.classList.add("button-red");
  } else {
    myLibrary[number]["read"] = "Yes";
    button.innerText = "Yes";
    button.classList.remove("button-red");
    button.classList.add("button-green");
  }
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(bookArgs) {
  let book = new Book(...bookArgs);
  myLibrary.push(book);
}

function render() {
  for (let i = 0; i < myLibrary.length; i++) {
    if (i === bookNumber) {
      let row = document.createElement("tr");

      if (bookNumber % 2 !== 0) {
        //Adds color to every other row
        row.classList.add("color-row");
      }

      row.setAttribute("data-book", bookNumber);

      for (let item in myLibrary[i]) {
        let cell = document.createElement("td");
        if (item === "read") {
          let button = document.createElement("button");
          button.innerText = myLibrary[i][item];
          myLibrary[i][item] === "Yes"
            ? button.classList.add("button-green")
            : button.classList.add("button-red");
          button.classList.add("change-read");
          button.setAttribute("type", "button");
          button.setAttribute("data-book", bookNumber);
          cell.append(button);
          row.append(cell);
        } else {
          cell.append(myLibrary[i][item]);
          row.append(cell);
        }
      }

      let cell = document.createElement("td");
      let deleteButton = document.createElement("button");
      let icon = document.createElement("ion-icon");
      icon.setAttribute("name", "trash-outline");
      button.classList.add("delete");
      button.setAttribute("type", "button");
      button.setAttribute("data-book", bookNumber);

      button.append(icon);
      cell.append(button);
      row.append(cell);

      tableBody.insertBefore(row, tableBody.firstChild);

      addDeleteButtons();
      addReadButtons();

      bookNumber++;
    }
  }
}

submit.addEventListener("clicked", (e) => {
  e.preventDefault();

  let form = document.querySelector("form");
  let bookArgs = [];
  let bookArray = [];

  for (let element of form.elements) {
    if (element.id === "read") {
      element.checked ? bookArgs.push("No") : bookArgs.push("Yes");
      element.checked = false;
    } else {
      bookArgs.push(element.value);
      if (element.id !== "submit") {
        element.value = "";
      }
    }
  }

  formContainer.style.display = "none";
  addBookToLibrary(bookArray);
  render();
});
