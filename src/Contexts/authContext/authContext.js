import React from 'react';
import { reducer } from './authReducer';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../Configs/firebaseConfigs';

export const AuthContext = React.createContext();
const initialValue = {
    isAuth: true,
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

    // const [currentUser, setCurrentUser] = React.useState({});

    const [toggleAuthForms, setToggleAuthForms] = React.useState(true);

    function handleFormsToggle(value) {
        setToggleAuthForms(value);
    }

    const [authState, authDispatch] = React.useReducer(reducer, initialValue);

    // React.useEffect(() => {
    //     getDocs(collection(db, 'loginedUser'))
    //         .then(res => {
    //             let d = [];
    //             res.docs.forEach(doc => {
    //                 d.push({ ...doc.data(), id: doc.id })
    //             })
    //             setCurrentUser(d[0]);
    //             // if (d[0].name) authDispatch({ type: 'LOGIN', payload: d[0] });
    //         }).then(err => {
    //             console.log(err);
    //         })
    // }, []);

    const value = {
        authState,
        authDispatch,
        handleFormsToggle,
        toggleAuthForms,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}