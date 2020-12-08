import React from 'react';
//import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import PlantList from './Components/PlantList'
import {PlantContextProvider} from './contexts/PlantContext';
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
    <PlantContextProvider>
    <div className="App">
      <Header />
      <PlantList />
    </div>
    </PlantContextProvider>
    </AuthContextProvider>
  );
}

export default App;