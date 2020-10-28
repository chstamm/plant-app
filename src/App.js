import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import PlantList from './Components/PlantList'
import Signup from './Components/Signup'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/plants' component={PlantList} />
        <Route path="/" exact component={PlantList} />
      </Switch>
    </div>
  );
}

export default App;