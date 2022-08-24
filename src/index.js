import React from "react";
import ReactDOM from "react-dom";
import { Navigation } from "./components/Navigation";
import { ElementPanel } from "./components/panel";

const rootElement = document.getElementById("root");
ReactDOM.render(<><Navigation /> <ElementPanel /></>, rootElement);