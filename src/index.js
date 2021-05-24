import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";

// Booklist application using arrays and objects

//Array of objects for books
const books = [
  {
    img: "https://m.media-amazon.com/images/I/91asIC1fRwL._AC_UY218_.jpg",
    title:
      "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "You Dont Know JS Yet: Get Started",
    author: "Kyle Simpson",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return "hello";
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
