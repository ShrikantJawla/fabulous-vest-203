import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NoPageFound from './../pages/NoPageFound';
import LoginPage from './../pages/login/LoginPage';
import ProfilePage from './../pages/ProfilePage';
import PrivateRoute from './PrivateRoute';
import HostPage from '../pages/HostPage';
import GoogleMap from './GoogleMap';
import GoogleMapForDropLocation from './GoogleMapForDropLocation'
import { AnimatePresence } from 'framer-motion';


function AllRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} state='hellooo' key={location.key} >
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/profile' element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
                <Route path='/host' element={<PrivateRoute><HostPage /></PrivateRoute>} />
                <Route path='/locationFinder' element={<GoogleMap />} />
                <Route path='/dropLocation' element={<GoogleMapForDropLocation />} />
                <Route path='*' element={<NoPageFound />} />
            </Routes >
        </AnimatePresence>
    )
}

export default AllRoutes
