import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
  });

  return <div>Hello world !</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
