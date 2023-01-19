import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Navbar,
  Banner,
  MainContent
} from './components';

function App() {
  return (
    <div className="main-page container-fluid w-100 bg-dark">
      <BrowserRouter>
        <Navbar></Navbar>
        <Banner></Banner>
        <MainContent></MainContent>
      </BrowserRouter>
    </div>
  );
}

export default App;
