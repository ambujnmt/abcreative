import React, { useState } from "react";
import Header from "../components/Menu/Header";
import Footer from "../components/Menu/Footer";
import Rendering from "../components/InnerPages/Rendering";

export default function rendering() {
    return (
        <>
            <Header /> 
            <Rendering />  
            <Footer /> 
        </>
    );
}
