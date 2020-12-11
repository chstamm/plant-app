import React from "react";
import { Route, Switch } from 'react-router-dom'
import "./App.css";
import Welcome from "./Components/WelcomePage/Welcome";
import Header from "./Components/MainLayout/Header";
import PlantList from "../src/Components/PlantListPage/PlantList";
import { PlantContextProvider } from "./contexts/PlantContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <Welcome />
      <AuthContextProvider>
        <PlantContextProvider>
          <div className="App">
            <Header />
            <PlantList />
          </div>
        </PlantContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
