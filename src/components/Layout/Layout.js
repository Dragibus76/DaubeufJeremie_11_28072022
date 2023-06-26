import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Layout.css';


export default function Layout() {
    return (
        <div className="container">
            <Header/>
            <Footer/>
        </div>
    )
}