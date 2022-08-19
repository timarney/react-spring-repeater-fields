import React from "react";
import ReactDOM from "react-dom";
import { ElementForm, TopBar, ElementPanel } from "./components";
import './App.scss';
import useFormElementStore from "./store/formElement";

const ElementPanels = () => {
  const { elements } = useFormElementStore();
  return (
    <div className="items">
      {elements.map((item, index) => {
        item.index = index;
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