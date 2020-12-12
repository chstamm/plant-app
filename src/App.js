import React from "react";
import { Route } from 'react-router-dom'
import "./App.css";
import Layout from "./Components/MainLayout/Layout";
import Home from "./Components/HomePage/Home"
import PlantList from "../src/Components/PlantListPage/PlantList";
import Profile from "../src/Components/Profile";
import { PlantContextProvider } from "./contexts/PlantContext";
import AuthContextProvider from "./contexts/AuthContext";
import { CSSTransition } from 'react-transition-group'

const routes = [
  { path: '/', Component: Home, },
  { path: '/plants', Component: PlantList, },
  { path: '/profile', Component: Profile, }
]

function App() {
  return (
    <div>
      <AuthContextProvider>
        <PlantContextProvider>
          <div className="App">
            <Layout />
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) =>  (
                  <CSSTransition
                    in={match !== null}
                    timeout={300}
                    classNames = 'fade'
                    unmountOnExit
                    >
                      <div className='fade'>
                        <Component />
                      </div>
                    </CSSTransition>
                )}
              </Route>
            ))}
          </div>
        </PlantContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
