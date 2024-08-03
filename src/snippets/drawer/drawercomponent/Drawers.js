import React, { useState } from 'react';
import './Drawers.css';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState({
    right: false,
    left: false,
    top: false,
    bottom: false,
  });

  const toggleDrawer = (direction) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [direction]: !prevState[direction],
    }));
  };

  return (
    <>
      <div className="button-container">
        <button onClick={() => toggleDrawer('right')} className="toggle-button">
          {isOpen.right ? 'Close Right Drawer' : 'Open Right Drawer'}
        </button>
        <button onClick={() => toggleDrawer('left')} className="toggle-button">
          {isOpen.left ? 'Close Left Drawer' : 'Open Left Drawer'}
        </button>
        <button onClick={() => toggleDrawer('top')} className="toggle-button">
          {isOpen.top ? 'Close Top Drawer' : 'Open Top Drawer'}
        </button>
        <button onClick={() => toggleDrawer('bottom')} className="toggle-button">
          {isOpen.bottom ? 'Close Bottom Drawer' : 'Open Bottom Drawer'}
        </button>
      </div>
      <div className={`drawer right ${isOpen.right ? 'open' : ''}`}>
        <div className="drawer-content">
          <h2>Right Drawer</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className={`drawer left ${isOpen.left ? 'open' : ''}`}>
        <div className="drawer-content">
          <h2>Left Drawer</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className={`drawer top ${isOpen.top ? 'open' : ''}`}>
        <div className="drawer-content">
          <h2>Top Drawer</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className={`drawer bottom ${isOpen.bottom ? 'open' : ''}`}>
        <div className="drawer-content">
          <h2>Bottom Drawer</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div
        className={`backdrop ${isOpen.right || isOpen.left || isOpen.top || isOpen.bottom ? 'visible' : ''}`}
        onClick={() => setIsOpen({ right: false, left: false, top: false, bottom: false })}
      ></div>
    </>
  );
};

export default Drawer;
