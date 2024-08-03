import React, { useState, useEffect } from 'react';
import './Snackbar.css';

const Snackbar = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`snackbar ${visible ? 'show' : 'hide'}`}>
    <p>{message}</p>
      <button className="snackbar__close" onClick={() => setVisible(false)}>
        &times;
      </button>
    </div>
  );
};

export default Snackbar;
