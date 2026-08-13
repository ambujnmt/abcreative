import React, { useState } from "react";
import Header from "../components/Menu/Header";
import Footer from "../components/Menu/Footer";
import Company from "../components/InnerPages/Company";

export default function company() {
    return (
        <>
            <Header /> 
            <Company />  
            <Footer /> 
        </>
    );
}
