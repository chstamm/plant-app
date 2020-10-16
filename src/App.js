import React from 'react';
import './App.css';
import PlantCard from './Components/PlantCard';
import Header from './Components/Header';
import PlantList from './Components/PlantList';

function App() {
  return (
    <div className="App">
      <PlantList />
      <Header />
      <PlantCard />
    </div>
  );
}

export default App;