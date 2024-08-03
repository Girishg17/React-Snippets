import React, { useState } from 'react';
import Alert from './alertcomponent/Alerts';

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('info');

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const triggerAlert = (type) => {
    setAlertType(type);
    setShowAlert(true);
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '20px',
    paddingLeft: '35px',
    justifyContent: 'space-between',
  };

  const buttonStyle = {
    marginRight: '10px',
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  };

  return (
    <div>
      <div style={containerStyle}>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          onClick={() => triggerAlert('success')}
        >
          Show Success Alert
        </button>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          onClick={() => triggerAlert('error')}
        >
          Show Error Alert
        </button>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          onClick={() => triggerAlert('warning')}
        >
          Show Warning Alert
        </button>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          onClick={() => triggerAlert('info')}
        >
          Show Info Alert
        </button>
      </div>
      {showAlert && (
        <Alert message="This is an alert message!" onClose={handleAlertClose} type={alertType} />
      )}
    </div>
  );
};

export default App;
