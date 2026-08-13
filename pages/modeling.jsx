import React, { useState } from "react";
import Header from "../components/Menu/Header";
import Footer from "../components/Menu/Footer";
import Modeling from '../components/InnerPages/Modeling';

export default function modeling() {
    return (
        <>
            <Header /> 
            <Modeling />  
            <Footer /> 
        </>
    );
}
