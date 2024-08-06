import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Spinner from './snippets/spinner/Spinner';
import NavBar from './snippets/navbar/NavBar';
import Drawer from './snippets/drawer/Drawer';
import Alert from './snippets/alert/Alert';
import Progress from './snippets/progress/Progress';
import Carousel from './snippets/carousels/Carousel';
import Snackbar from './snippets/snackbar/Snackbar';
import Stepper from './snippets/stepper/Stepper';
import Form from './snippets/forms/Forms';
import Dialog from './snippets/dialog/Dialog';
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
        <Route path='/carousel' element={<Carousel />} />
        <Route path='/snackbar' element={<Snackbar />} />
        <Route path='/stepper' element={<Stepper />} />
        <Route path='/form' element={<Form />} />
        <Route path='/dialog' element={<Dialog />} />
      </Routes>
    </Router>
  );
}

export default App;
