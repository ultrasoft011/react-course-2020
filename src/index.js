import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";
// Import books.js
import {books} from "./books"
// Import Book.js
import Book from "./Book"

// Booklist application using arrays and objects

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
            /* Another way to get the objet is with the spread operator => changing book={book} for {...book}*/
            <Book key={book.id} book={book}></Book>
        )
      })}
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById("root"));
