import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import PlantList from './Components/PlantList'

function App() {
  return (
    <div className="App">
      <Header />
      <PlantList />
    </div>
  );
}

export default App;