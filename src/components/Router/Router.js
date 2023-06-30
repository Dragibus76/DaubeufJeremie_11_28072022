import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Housing from "../../pages/Housing/Housing";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/housing/:id' element={<Housing/>}/>
            //404 page a faire ici
        </Routes>
    )
}