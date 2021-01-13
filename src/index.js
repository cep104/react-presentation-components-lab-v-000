import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";
//not a class function so JSX rules so need to have let for a function and don't pass in with this.
let handleClick = () => {
  let words = document.querySelector("#words");
  words.style.color = "red";
};
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleClick} />
  </div>,
  document.getElementById("root")
);
