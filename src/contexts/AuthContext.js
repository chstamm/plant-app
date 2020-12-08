import React, {useState, createContext} from 'react';

export const AuthContext = createContext({
    isAuth: false, 
    login: () => {},
    logout: () => {}
})

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const signinHandler = () => {
        setIsAuthenticated(true)
    }
    const logoutHandler = () => {
        setIsAuthenticated(false)
    }

 
    return (
        <div>
            <AuthContext.Provider value = {{
                login: signinHandler,
                logout: logoutHandler,
                isAuth: isAuthenticated
            }} >
                {props.children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider 