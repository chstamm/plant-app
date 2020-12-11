import React from "react";
import { Route } from 'react-router-dom'
import "./App.css";
import Layout from "./Components/MainLayout/Layout";
import Home from "./Components/Home"
import PlantList from "../src/Components/PlantListPage/PlantList";
import { PlantContextProvider } from "./contexts/PlantContext";
import AuthContextProvider from "./contexts/AuthContext";



function App() {
  return (
    <div>
      <AuthContextProvider>
        <PlantContextProvider>
          <div className="App">
            <Layout />
            <Route path="/" exact component={Home} />
            <Route path="/plants" exact component={PlantList} />
          </div>
        </PlantContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
