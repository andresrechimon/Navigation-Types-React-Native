import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

//Define what it looks like and what information I will have here
export interface AuthState {
    isLoggedIn:boolean;
    username?:string;
    favoriteIcon?:string;
}

//Initial state
export const authInitialState:AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

//We'll use it to tell React what it looks like and what the context exposes.
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    favoriteIcon:(iconName:string) => void;
    changeUsername:(username:string) => void;
}

//Create the context
export const AuthContext = createContext({} as AuthContextProps);

//State supplier component
export const AuthProvider = ({children}:any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    const logOut = () => {
        dispatch({type: 'logOut'})
    }

    const favoriteIcon = (iconName:string) => {
        dispatch({type: 'favoriteIcon', payload: iconName})
    }

    const changeUsername = (username:string) => {
        dispatch({type: 'changeUsername', payload: username})
    }

    return(
        <AuthContext.Provider value={{
            authState: authState,
            signIn: signIn,
            logOut: logOut,
            favoriteIcon: favoriteIcon,
            changeUsername: changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}