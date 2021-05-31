import React from "react";
import ReactDom from "react-dom";

function HelloWorld() {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}

ReactDom.render(<HelloWorld />, document.querySelector("#root"));
