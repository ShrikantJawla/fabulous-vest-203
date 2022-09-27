import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NoPageFound from './../pages/NoPageFound';

function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={ <NoPageFound/>} />
        </Routes>
    )
}

export default AllRoutes
