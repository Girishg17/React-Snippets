import React, { useState, useEffect } from 'react';
import ToggleSwitch from './darkmodecomponent/Darks';
import './Dark.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <div className="App">
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <ToggleSwitch isOn={isDarkMode} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
