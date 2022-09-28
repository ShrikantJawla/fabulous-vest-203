import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NoPageFound from './../pages/NoPageFound';
import LoginPage from './../pages/login/LoginPage';
import ProfilePage from './../pages/ProfilePage';

function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={ <NoPageFound/>} />
        </Routes>
    )
}

export default AllRoutes
