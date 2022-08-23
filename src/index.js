import React from "react";
import ReactDOM from "react-dom";
import { TopBar, ElementForm } from "./components";

const App = () => {
  return (
    <>
      <TopBar />
      <ElementForm />
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);