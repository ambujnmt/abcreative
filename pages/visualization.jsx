import React, { useState } from "react";
import Header from "../components/Menu/Header";
import Footer from "../components/Menu/Footer";
import Visualization from "../components/InnerPages/Visualization";

export default function visualization() {
    return (
        <>
            <Header /> 
            <Visualization />  
            <Footer /> 
        </>
    );
}
