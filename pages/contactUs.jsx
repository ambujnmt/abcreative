import React, { useState } from "react";
import Header from "../components/Menu/Header";
import Footer from "../components/Menu/Footer";
import ContactUs from "../components/InnerPages/ContactUs";

export default function contactUs() {
    return (
        <>
            <Header /> 
            <ContactUs />  
            <Footer /> 
        </>
    );
}
