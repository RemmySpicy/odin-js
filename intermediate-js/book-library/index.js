const newInput = document.querySelector('.book-input');
const bookList = document.querySelector('.book-list');
const addBookBtn = document.querySelector('.add-book');

// const form = document.querySelector('form').addEventListener('submit', (e) => {e.preventDefault()})

let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        return `$title by ${author}, ${pages} pages, ${hasRead}`
    }
}

// Add new book button
addBookBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary(library) {
    // e.preventDefault();

    let newTitle = document.querySelector('.book-title').value;
    let newAuthor = document.querySelector('.book-author').value;
    let newPages = document.querySelector('.book-page').value;
    let newHasRead = document.querySelector('input[name=has-read]:checked').defaultValue;

    let newBook = new Book(newTitle, newAuthor, newPages, newHasRead);

    library = myLibrary;
    library.push(newBook)
    displayBooks(library)
}

function displayBooks(arr) {
    for (let i = arr.length - 1; i < arr.length; i++) {

        tbody = document.querySelector('tbody');
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th> ${arr[i].title} </th>
        <td> ${arr[i].author} </td>
        <td> ${arr[i].pages} </td>
        <td> <button class="delete-item">Delete</button> </td>
        `;
        tbody.appendChild(tr);
        deleteItem()
    }
}

function deleteItem() {
    const deleteBtn = Array.from(document.querySelectorAll('.delete-item'));

    deleteBtn.forEach( item => {
        item.addEventListener('click', () => {
            item.remove(item.parentElement)
        })
    })
}


// deleteItem.addEventListener('click', () => {
    // const tr = document.querySelectorAll('tr');
    // deleteItem.parentElement.removeChild(tr)
    // console.log('clicked')
// })

// addBookBtn.addEventListener('click', displayBooks(myLibrary))





// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

// Add a button on each book’s display to remove the book from the library.

// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// Add a button on each book’s display to change its read status.

// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

// NOTE: You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course.