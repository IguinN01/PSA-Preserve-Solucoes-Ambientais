import React from "react";
import { Leaf } from "lucide-react";
import "./Loader.css";

const Loader = () => {
  return (
    <div id="loader" className="loader-container">
      <Leaf className="loader-icon" />
      <div className="loader-text-container">
        <span>PSA</span>
        <div className="loader-dots-container">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;