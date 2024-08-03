// src/App.js

import React, { useState, useEffect } from 'react';
import ProgressBar from './progresscomponent/Progreses';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for increasing, -1 for decreasing

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev == 100) {
          setDirection(-1);
        } else if (prev <= 0) {
          setDirection(1);
        }
        return prev + direction;
      });
    }, 70); 

    return () => clearInterval(interval); 
  }, [direction]);

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default App;
