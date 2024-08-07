import React from 'react';
import './Darks.css';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div className="switch">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#06D6A0' }}
        className="switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`switch-button`} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
