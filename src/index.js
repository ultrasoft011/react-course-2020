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

function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "Marijn Haverbeke";

const Book = () => {
  const title =
    "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming";
	return (
    <article className="book">
      <img src="https://m.media-amazon.com/images/I/91asIC1fRwL._AC_UY218_.jpg"></img>
	  { /* Javascript in our JSX -> with {the code} */ }
	  <h1>{title}</h1>
	  <h4>{author}</h4>
	  <p>{6 + 6}</p>
    </article>
  );
};

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
