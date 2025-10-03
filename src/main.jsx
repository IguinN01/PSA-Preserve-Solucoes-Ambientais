import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/pages/Home";
import Loader from "../src/components/Loader/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));

import "./styles/reset.css";
import "./styles/global.css";

root.render(
  <React.StrictMode>
    <Loader />
    <App />
  </React.StrictMode>
);

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("hidden");
  }
});