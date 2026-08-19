import React, { useState } from "react";
import Header from "../components/Menu/Header";
import Footer from "../components/Menu/Footer";
import Faq from "../components/InnerPages/Faq";

export default function faq() {
    return (
        <>
            <Header /> 
            <Faq />  
            <Footer /> 
        </>
    );
}
