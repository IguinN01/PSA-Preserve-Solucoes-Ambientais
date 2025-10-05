import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/pages/Home";

import "./styles/reset.css";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);