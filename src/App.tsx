import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './app/pages/Home/Index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
