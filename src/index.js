import React from "react";
import ReactDOM from "react-dom";
import { ElementForm, TopBar, ElementPanel } from "./components";
import { RepeaterProvider, useRepeater } from "./store/RepeaterContext";
import './App.scss';

const ElementPanels = () => {
  const { state, addToRefs } = useRepeater();
  return (
    <div className="items">
      {state.map((item, index) => {
        item.index = index;
        return (
          <div key={item.id} className={`item item-${index}`} ref={addToRefs}>
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
    <RepeaterProvider>
      <div className="app">
        <TopBar />
        <ElementPanels />
      </div>
    </RepeaterProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);