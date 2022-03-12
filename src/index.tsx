import React from "react";
import { render } from "react-dom";
import App from "./App";

// find the #root element on the page
const root = document.getElementById("root");

// replace it the <App /> component
render(<App />, root);