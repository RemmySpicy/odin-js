const form = document.querySelector('form');
const addBookBtn = document.querySelector('.add-book');
const tbody = document.querySelector('tbody');
const filter = document.querySelector('.filter');


// Book form sumbit event
form.addEventListener('submit', addBookToLibrary)

// Filter event
// filter.addEventListener('keyup', filterItems);

// Book row deletion event 
tbody.addEventListener('click', deleteItem)

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

    info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}`;

    readStatus = (library, index) => library[index].hasRead == 'yes' ? 'checked' : '';     

    // readStatus(library, index) {
    //     console.log(`${this.title} has ${library[index].hasRead == 'yes' ? '' : 'not'} been read`);
    //     return library[index].hasRead == 'yes' ? 'checked' : '';           
    // }
}



// Add book function
function addBookToLibrary(e, library) {
    e.preventDefault();

    let newTitle = document.querySelector('.book-title').value;
    let newAuthor = document.querySelector('.book-author').value;
    let newPages = document.querySelector('.book-page').value;
    // let newHasRead = document.querySelector('input[name=has-read]:checked').value || undefined;
    let newHasRead = document.querySelector('input[name=has-read]:checked').value;

    // console.log({newTitle, newAuthor, newPages, newHasRead})

    let newBook = new Book(newTitle, newAuthor, newPages, newHasRead);

    library = myLibrary;
    library.push(newBook)
    displayBooks(library)
}

function displayBooks(arr) {
    // array.forEach((book, i) => {
    //     const tr = document.createElement('tr');
    //     console.log(book);
    //     tr.innerHTML = `
    //     <th> ${book.title} </th>
    //     <td> ${book.author} </td>
    //     <td> ${book.pages} </td>
    //     <td> <input type="checkbox" class="read-status" ${book.readStatus(array, i)}> </td>
    //     <td> <button class="delete-btn">Delete</button> </td>
    //     `;
    //     tbody.appendChild(tr);
    //     // tbody.insertAdjacentElement("beforebegin", tr)
    //     console.log(book.info())
    // });

    for (let i = arr.length - 1; i < arr.length; i++) {

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th> ${arr[i].title} </th>
        <td> ${arr[i].author} </td>
        <td> ${arr[i].pages} </td>
        <td> <input type="checkbox" class="read-status" ${arr[i].readStatus(arr, i)}> </td>
        <td> <button class="delete-btn">Delete</button> </td>
        `;
        // tbody.appendChild(tr);
        tbody.insertAdjacentElement("beforeend", tr)
        console.log(arr[i].info())
    }
}


function deleteItem(e) {

    // when table item is clicked, check for secific class
    if (e.target.classList.contains('delete-btn')) {
        tbody.removeChild(e.target.parentElement.parentElement)    
    }


    // const deleteBtn = Array.from(document.querySelectorAll('.delete-btn'));

    // deleteBtn.forEach( item => {
    //     item.addEventListener('click', () => {
    //         tbody.removeChild(item.parentElement.parentElement)
    //         deleteItem()
    //     })
    // })

}



// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();

    // Get lis
    var items = itemList.getElementsByTagName('li');

    // Convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}




// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

// Add a button on each book’s display to remove the book from the library.

// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// Add a button on each book’s display to change its read status.

// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

// NOTE: You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course.