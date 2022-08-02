// book class: represent a book
class Book {
  constructor(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn

  }
}
// ui class: handle ui tasks
class UI {
  static displayBooks(){
    const StoreBooks =[
      {
        title: 'Book One',
        author: 'John Doe',
        isbn:3434434
      },
      {
        title:'Book Two',
        author: ' Jane Doe',
        isbn: '45545'
      }
    ]

    const books = StoredBooks

    books.forEach((book) => UI.addBookToList(book))
    }

    static addBookToList(){
      const list = document.querySelector('#book-list')

      const row = document.createElement('tr')

      row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `

      list.appendChild(row)
    }
  }

// store class: handles storage

// event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// event: add a book 


// event: remove a book



