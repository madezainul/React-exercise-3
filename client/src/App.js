import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Navbar,
  MainContent
} from './components';

function App() {
  return (
    <div className="main-page container-fluid w-100 bg-dark">
      <BrowserRouter>
        <Navbar></Navbar>
        <MainContent></MainContent>
      </BrowserRouter>
    </div>
  );
}

export default App;
