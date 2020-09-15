import React from 'react';
import './App.css';
import Starship from './Starships/Starship';
import Header from './Starships/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Starship />
    </div>
  );
}

export default App;