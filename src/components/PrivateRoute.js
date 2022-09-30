import React from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/authContext/authContext';


function PrivateRoute({ children }) {
    const { authState } = React.useContext(AuthContext);

    if (!authState.isAuth) return <Navigate to='/' />;


    return children;
}

export default PrivateRoute
