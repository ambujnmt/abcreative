import React, { useState } from "react";
import Header from "../components/Menu/Header";
import Footer from "../components/Menu/Footer";
import WhatWeDo from "../components/InnerPages/WhatWeDo";

export default function whatWeDo() {
    return (
        <>
            <Header /> 
            <WhatWeDo />  
            <Footer /> 
        </>
    );
}
