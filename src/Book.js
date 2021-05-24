import React from 'react'

const Book = (props) => {
  // Remove props.book, only keep props if we are going to use the spread operator
  // React events: attribute and eventHandler
  // onClick, onMouseOver (Events examples)
  const { img, title, author } = props.book;
  //Function to handle the click event
  const clickHandler = () => {
    alert("Hello React!");
  };
  // Passing an argument to an event
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt=""></img>
      {/* Events inline */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      {/* For this complex example need to set an arrow function in order to get the author declared at the beginning */}
      <button type="button" onClick={() => complexExample(author)}>
        Complex
      </button>
    </article>
  );
};


export default Book
