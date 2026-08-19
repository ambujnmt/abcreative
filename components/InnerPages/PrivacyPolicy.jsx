"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "@heroui/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import FaqCom from "./FaqCom";


export default function PrivacyPolicy() {
    return (
        <>
            {/* Breadcrumb section */}
            <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden"> 
                <img
                    src="/assets/img/breadcrumb-img.png"
                    alt="Company Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 text-center pt-[30px]">
                    <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
                    <div className="flex items-center justify-center gap-2 text-white text-[16px] font-medium">
                        <span>Home</span>
                        <IoIosArrowForward size={16} />
                        <span className="text-[var(--primary-color)]">Privacy Policy</span>
                    </div>
                </div>
            </div>
            {/* // Breadcrumb section */}


            {/* Page start here */}
            
            {/* // Page start here */}
        </>
    )
}
