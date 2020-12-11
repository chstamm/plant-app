import React from "react";
import { Route } from 'react-router-dom'
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
            <Route path="/" exact render={() => Welcome} />
            <Route path="/" exact render={() => PlantList} />s
            <Header />
            <PlantList />
          </div>
        </PlantContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
