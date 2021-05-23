import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return <h1>Andres, and this is my first component </h1>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
