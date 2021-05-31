import React from "react";
import ReactDom from "react-dom";

function Hello() {
  return <span>Hello</span>;
}

function World() {
  return <span>World</span>;
}

function HelloWorld() {
  return (
    <div>
      <Hello /> <World />
    </div>
  );
}

ReactDom.render(<HelloWorld />, document.querySelector("#root"));
