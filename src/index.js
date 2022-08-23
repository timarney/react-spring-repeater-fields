import React from "react";
import ReactDOM from "react-dom";
import { TopBar, Form } from "./components";

const App = () => {
  return (
    <div className="app">
      <TopBar />
      <Form />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);