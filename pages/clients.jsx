import React, { useState } from "react";
import Header from "../components/Menu/Header";
import Footer from "../components/Menu/Footer";
import Clients from "../components/InnerPages/Clients";

export default function clients() {
    return (
        <>
            <Header /> 
            <Clients />  
            <Footer /> 
        </>
    );
}
