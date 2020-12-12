import React, {useState, createContext} from 'react';
//import { auth } from "../lib/firebase"

export const AuthContext = createContext({
    isAuth: false, 
    login: () => {},
    logout: () => {}
})

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const loginHandler = () => {
        setIsAuthenticated(true)
    }
    const logoutHandler = () => {
        setIsAuthenticated(false)
    }

 
    return (
        <div>
            <AuthContext.Provider value = {{
                login: loginHandler,
                logout: logoutHandler,
                isAuth: isAuthenticated
            }} >
                {props.children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider 