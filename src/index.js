import React from "react";
import ReactDOM from "react-dom";
import { ElementPanel } from "./components/panel";
import { Output } from "./components/Output";
const rootElement = document.getElementById("root");
ReactDOM.render(<><ElementPanel /> <Output /></>, rootElement);