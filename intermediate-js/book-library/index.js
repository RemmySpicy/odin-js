const newInput = document.querySelector('.book-input');
const bookList = document.querySelector('.book-list');
const newBookBtn = document.querySelector('.new-book');

let myLibrary = ['you can win', 'why ask why'];

function Books (title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
    this.info = function() {
        return `$title by ${author}, ${pages} pages, ${hasRead}`
    }
}

function addBookToLibrary(library) {
  library.push(newInput.value)
}

function displayBooks(arr) {
    for (let item of arr) {
        let p = document.createElement('p');
        let button = document.createElement('button');
        button.textContent = 'delete';

        p.textContent = item;
        p.appendChild(button);
        bookList.appendChild(p)
    }
}

console.log(myLibrary)
// displayBooks(myLibrary)

newBookBtn.addEventListener('click', displayBooks(myLibrary))





// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

// Add a button on each book’s display to remove the book from the library.

// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// Add a button on each book’s display to change its read status.

// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

// NOTE: You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course.