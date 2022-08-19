import React from "react";
import ReactDOM from "react-dom";
import { ElementForm, TopBar, ElementPanel } from "./components";
import './App.scss';
import useFormElementStore from "./store/formElement";

const ElementPanels = () => {
  const { elements } = useFormElementStore();
  return (
    <div className="items">
      {elements.map((element, index) => {
        const item = { ...element, index };
        return (
          <div key={item.id} className={`item item-${index}`}>
            <ElementForm item={item} />
            <ElementPanel item={item} />
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <TopBar />
      <ElementPanels />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);