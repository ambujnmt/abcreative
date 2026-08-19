import React, { useState } from "react";
import Header from "../components/Menu/Header";
import Footer from "../components/Menu/Footer";
import TermsConditions from "../components/InnerPages/TermsConditions";

export default function termsConditions() {
    return (
        <>
            <Header /> 
            <TermsConditions />  
            <Footer /> 
        </>
    );
}
