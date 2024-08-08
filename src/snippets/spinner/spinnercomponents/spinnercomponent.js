// Spinner.js
import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinners-container">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>

      <div>
        <div className="spinner-container">
          <div className="spinner2"></div>
        </div>
      </div>
      <div>
        <div className="spinner-container">
          <div className="spinner3"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
