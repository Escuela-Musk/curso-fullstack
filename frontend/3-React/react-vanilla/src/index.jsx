import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// React 18: createRoot en lugar de ReactDOM.render
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
