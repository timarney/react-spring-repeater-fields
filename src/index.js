import React from "react";
import ReactDOM from "react-dom";
import { TopBar } from "./components/TopBar";
import { RepeaterProvider, useRepeater } from "./store/RepeaterContext";
import { ElementPanel } from "./components/ElementPanel";
import './App.scss';

const Elements = () => {
  const { state } = useRepeater();

  const items = state.map((item, index) => {
    return <ElementPanel key={item.id} item={item} index={index} />
  })

  return (
    <div className="items">
      {items}
    </div>
  );
};

const App = () => {
  return (
    <RepeaterProvider>
      <div className="app">
        <TopBar />
        <Elements />
      </div>
    </RepeaterProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);