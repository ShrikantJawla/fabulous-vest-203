import React from 'react';
import { reducer } from './authReducer';

export const AuthContext = React.createContext();
const initialValue = {
    isAuth: false,
    loading: false,
    userDetails: {
        mobile: '',
        profilePhoto: '',
        name: '',
        email: '',
        gender: 'Male',
        city: ''
    }
}

export default function AuthContextProvider({ children }) {

    const [toggleAuthForms, setToggleAuthForms] = React.useState(true);

    function handleFormsToggle(value) {
        setToggleAuthForms(value);
    }

    const [authState, authDispatch] = React.useReducer(reducer, initialValue);


    const value = { authState, authDispatch, handleFormsToggle, toggleAuthForms };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}