//@ts-nocheck
import React from "react";
import { render } from "react-dom";
import App from "./App";

const container = document.getElementById("root");

render(<App {...window.props} />, container);
