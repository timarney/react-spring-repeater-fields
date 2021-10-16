import React from "react";
import ReactDOM from "react-dom";
import { TopBar } from "./components/TopBar";
import { Repeater } from "./components/Repeater";
import { RepeaterProvider } from "./store/RepeaterContext";
import './App.scss';

const App = () => {
  return (
    <RepeaterProvider>
      <div className="app">
        <TopBar />
        <Repeater />
      </div>
    </RepeaterProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
