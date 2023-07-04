import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
