import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { AboutUs } from '../pages/AboutUs/AboutUs';
import { Contacts } from '../pages/Contacts/Contacts';
import { Landing } from "../pages/Landing/Landing";



export function AppRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<AboutUs />} />
            <Route path="/contato" element={<Contacts />} />
        </Routes>
        </>
    );
}