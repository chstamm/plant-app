import React from 'react';
import './App.css';
import PlantCard from './Components/PlantCard';
import Header from './Components/Header';
import PlantData from './Components/PlantData';

function App() {
  return (
    <div className="App">
      <PlantData />
      <Header />
      <PlantCard />
    </div>
  );
}

export default App;