const addBookBtn = document.querySelector('.add-book');

// Book library
let myLibrary = [];

// Book constructor
class Book {
    constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;            
    } 

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}`;
    }

    readStatus(library, index) {
        // for (let i = 0; i < library.length; i++) {
            if (library[index].hasRead == 'yes') {
                console.log(`${this.title} been read`)
                return "checked";
            }
            console.log(`${this.title} has not been read`)
            
        // }
    }
}


// Add new book button
// addBookBtn.addEventListener('click', addBookToLibrary);

const form = document.querySelector('form');
form.addEventListener('submit', addBookToLibrary)

// Add book function
function addBookToLibrary(e, library) {
    e.preventDefault();

    let newTitle = document.querySelector('.book-title').value;
    let newAuthor = document.querySelector('.book-author').value;
    let newPages = document.querySelector('.book-page').value;
    let newHasRead = document.querySelector('input[name=has-read]:checked').value || undefined;

    console.log({newTitle, newAuthor, newPages, newHasRead})

    console.log(newHasRead)
    let newBook = new Book(newTitle, newAuthor, newPages, newHasRead);

    library = myLibrary;
    library.push(newBook)
    displayBooks(library)
}

const tbody = document.querySelector('tbody');
function displayBooks(arr) {
    for (let i = arr.length - 1; i < arr.length; i++) {

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th> ${arr[i].title} </th>
        <td> ${arr[i].author} </td>
        <td> ${arr[i].pages} </td>
        <td> <input type="checkbox" class="read-status" ${arr[i].readStatus(arr, i)}> </td>
        <td> <button class="delete-btn">Delete</button> </td>
        `;
        tbody.appendChild(tr);
        // arr.[`${arr[i]}`].hasRead(arr)
        console.log(arr[i].info())
    }
    deleteItem()
}

function deleteItem() {
    const deleteBtn = Array.from(document.querySelectorAll('.delete-btn'));

    deleteBtn.forEach( item => {
        item.addEventListener('click', () => {
            tbody.removeChild(item.parentElement.parentElement)
            deleteItem()
        })
    })
}








// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

// Add a button on each book’s display to remove the book from the library.

// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// Add a button on each book’s display to change its read status.

// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

// NOTE: You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course.