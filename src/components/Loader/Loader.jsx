import React from "react";
import { Leaf } from "lucide-react";
import "../../styles/Loader.css";

const Loader = () => {
  return (
    <div id="loader" className="loader-container">
      <Leaf className="loader-icon" />
    </div>
  );
};

export default Loader;