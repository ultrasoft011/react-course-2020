import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";

// Booklist application using arrays and objects

//Array of objects for books
const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/91asIC1fRwL._AC_UY218_.jpg",
    title:
      "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71viHxTLKgL._AC_UY218_.jpg",
    title: "JavaScript and JQuery: Interactive Front-End Web Development",
    author: "Jon Duckett"
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "You Dont Know JS Yet: Get Started",
    author: "Kyle Simpson",
  },
];

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

const Book = (props) => {
    // Remove props.book, only keep props if we are going to use the spread operator 
    // React events: attribute and eventHandler
    // onClick, onMouseOver (Events examples)
    const {img, title, author} = props.book;
    //Function to handle the click event
    const clickHandler = () =>  {
        alert('Hello React!');
    }
    // Passing an argument to an event 
    const complexExample = (author) => {
        console.log(author);
    };
    return (
      <article className="book">
        <img src={img} alt=''></img>
        {/* Events inline */}
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Reference Example</button>
        {/* For this complex example need to set an arrow function in order to get the author declared at the beginning */}
        <button type="button" onClick={() => complexExample(author)}>Complex</button>
      </article>
    );
}


ReactDom.render(<BookList />, document.getElementById("root"));
