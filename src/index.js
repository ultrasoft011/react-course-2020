import React from "react";
import ReactDom from "react-dom";

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

function Greeting() {
	return (
		<div>
			<h1>Hello World with a Div!</h1>
		</div>
	)
}


/* React create element: another way to declare react components
	const Greeting1 = () => {
	return React.createElement('h1', {}, 'hello world') 
	}
 */

ReactDom.render(<Greeting />, document.getElementById("root"));

