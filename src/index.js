import React from "react";
import ReactDOM from "react-dom";
import { ElementForm } from "./components/panel/ElementForm";

const App = () => {
  return (
    <>
      <ElementForm />
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);