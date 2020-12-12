import React from "react";
import { Route } from 'react-router-dom'
import "./App.css";
import Layout from "./Components/MainLayout/Layout";
import Home from "./Components/HomePage/Home"
import Signup from "./Components/Login/SignUp"
import PlantList from "../src/Components/PlantListPage/PlantList";
import Favorites from "./Components/Favorites";
import { PlantContextProvider } from "./contexts/PlantContext";
import AuthContextProvider from "./contexts/AuthContext";
import { CSSTransition } from 'react-transition-group'

const routes = [
  { path: '/', Component: Home, },
  { path: '/signup', Component: Signup, },
  { path: '/plants', Component: PlantList, },
  { path: '/favorites', Component: Favorites, }
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
