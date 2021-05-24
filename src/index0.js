import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";

/* // functional component
function Greeting() {
	return <h1>Andres, and this is my first component </h1>;
} */

// JSX Rules
// 1. Return single element
// 2. div / section / article or Fragment (<>)
// 3. Use camelCase for html attribute
// 4. className instead of class
// 5. Close every element />

/* function Greeting() {
	return (
		<div>
			// Call Person function with <Person />
			<Person /> 
			<h1>Hello World with a Div!</h1>
		</div>
	)
} */

// Nested components, React tools
/* // Function "Person" that will be use inside of Greeting with <Person />
const Person = () => {
	return (
		<div>
			<h1>Andres aka Ultrasoft</h1>
		</div>
	)
};
 */

/* React create element: another way to declare react components
	const Greeting1 = () => {
	return React.createElement('h1', {}, 'hello world') 
	}
 */

// Booklist application

// Setup vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/91asIC1fRwL._AC_UY218_.jpg",
  title:
    "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
  author: "Marijn Haverbeke",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "You Don't Know JS Yet: Get Started",
  author: "Kyle Simpson",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
		<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
		vero.
		</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

//First way to access to props
/* const Book = (props) => {
  return (
    <article className="book">
      {Javascript in our JSX -> with {the code}}
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
}; */

//Second way to access to props - destructuring
const Book = (props) => {
	const {img, title, author, children} = props;
	return (
		<article className="book">
			<img src={img} />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{children}
		</article>
	)
}



// Book application with nested componentes

/* const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://m.media-amazon.com/images/I/91asIC1fRwL._AC_UY218_.jpg"></img>
);

const Title = () => (
  <h1>
    Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming
  </h1>
);

/* const Author = () => <h3>by Marijn Haverbeke</h3>;
 */

// To access to the Javascript world to style an element, need to use {}, the properties with the camelCase and values inside of ' '

/* const Author = () => (
  <h3 style={{ color: "#617d98", fontSize: "18px" }}> by Marijn Haverbeke</h3>
); */

// ReactDom render method to make it work with the root element
ReactDom.render(<Booklist />, document.getElementById("root"));
