import React, {useState, useContext, createContext, useEffect} from 'react';
import { auth } from "../lib/firebase"

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthContext = createContext({
    isAuth: false, 
    signup: (email, password) => {
        return auth.createUserWithEmailAndPassword(email,password)
    },
    login: () => {},
    logout: () => {}
})

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function signupHandler () {
        setIsAuthenticated(true)
    }

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })

    return unsubscribe
   }, [])

    const loginHandler = () => {
        setIsAuthenticated(true)
    }
    const logoutHandler = () => {
        setIsAuthenticated(false)
    }

 
    return (
        <div>
            <AuthContext.Provider value = {
                {
                currentUser,
                signup: signupHandler,
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