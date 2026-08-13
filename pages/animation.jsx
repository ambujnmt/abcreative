import React, { useState } from "react";
import Header from "../components/Menu/Header";
import Footer from "../components/Menu/Footer";
import Animation from "../components/InnerPages/Animation";

export default function animation() {
    return (
        <>
            <Header /> 
            <Animation />  
            <Footer /> 
        </>
    );
}
