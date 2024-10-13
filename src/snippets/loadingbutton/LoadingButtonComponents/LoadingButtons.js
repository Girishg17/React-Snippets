import React, { useState } from "react";
import "./Loading.css"; 

const LoadingButtons = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulate a network request or any action
    setTimeout(() => {
      setLoading(false);
      // Proceed with your logic after loading
    }, 3000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`loading-button ${loading ? "loading" : ""}`}
    >
      {loading ? (
        <span className="dots-loading">
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </span>
      ) : (
        "Proceed"
      )}
    </button>
  );
};

export default LoadingButtons;
