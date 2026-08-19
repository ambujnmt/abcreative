import React, { useState } from "react";
import Header from "../components/Menu/Header";
import Footer from "../components/Menu/Footer";
import PrivacyPolicy from "../components/InnerPages/PrivacyPolicy";

export default function privacyPolicy() {
    return (
        <>
            <Header />
            <PrivacyPolicy />
            <Footer />
        </>
    );
}