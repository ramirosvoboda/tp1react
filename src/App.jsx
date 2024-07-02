import React from 'react';
import Navbar from '../src/components/Navbar';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="main-image" />
        <h1>Mi Primer React App</h1>
      </div>
    </div>
  );
}

export default App;
