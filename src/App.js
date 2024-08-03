import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Spinner from './snippets/spinner/Spinner';
import NavBar from './snippets/navbar/NavBar';
import Drawer from './snippets/drawer/Drawer';
import Alert from './snippets/alert/Alert';
import Progress from './snippets/progress/Progress';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spinner" element={<Spinner />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/drawer"element={<Drawer />} />
        <Route path='/alert' element={<Alert />} />
        <Route path='/progress' element={<Progress />} />
      </Routes>
    </Router>
  );
}

export default App;
