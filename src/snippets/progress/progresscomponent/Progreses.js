
import React from 'react';
import './Progreses.css';

const ProgressBar = ({ progress }) => {
  const getGradient = () => {
    return `linear-gradient(to right, #ff6f61 ${progress}%, #e0e0e0 ${progress}%)`;
  };

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%`, background: getGradient() }}>
        <span className="progress-text">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
