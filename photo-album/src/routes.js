import React from 'react';
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login/Login';
import Home from './pages/HomePage/HomePage';
import Signup from './pages/Signup/Signup';
import Pictures from './pages/Pictures/Pictures'

export const Routes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={Login} />
                <Route exact path="/home" element={Home} />
                <Route exact path="/signup" element={Signup} />
                <Route exact path="/pictures" element={Pictures} />
            </Routes>
        </div>
    );
};