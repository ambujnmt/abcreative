"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "@heroui/react";
import { FiMonitor, FiFilm, FiBox, FiCpu, FiArrowRight } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6"; 
import WhatWeDoSec from "../Main/HomeSections/WhatWeDoSec";
import TrustedCompanies from "./TrustedCompanies";
import { FaArrowRight } from "react-icons/fa";


export default function WhatWeDo() {
     

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
                    <h1 className="text-4xl font-bold text-white mb-3">What we do</h1>
                    <div className="flex items-center justify-center gap-2 text-white text-[16px] font-medium">
                        <span>Home</span>
                        <IoIosArrowForward size={16} />
                        <span className="text-[var(--primary-color)]">What we do</span>
                    </div>
                </div>
            </div>
            {/* // Breadcrumb section */}


            {/* Page start here */}
            <section className="bg-white pt-20">
                <div className="container">
                    {/* Section 1 */}
                    <section className="pb-[30px]">
                        <div className="container">
                            <div className="grid grid-cols-12 gap-6 items-center">
                                <div className="lg:col-span-6 md:col-span-6 col-span-12"> 
                                    <h3 className="font-semibold lg:text-[55px] text-[23px] lg:leading-[100%] leading-[30px] text-[var(--text-color1)] mb-5">Our creative 3D visualization service helps explain complicated projects, goods or services. </h3>
                                    <p className="text-[20px] text-[var(--text-color2)] font-normal leading-[25px]">We have <span className="text-[var(--primary-color)]"> 20 years experience </span> producing 3D visualization for our returning local & international customers.</p>
    
                                    <button className="mt-[40px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] lg:text-[20px] text-[18px] font-medium leading-[100%]">Request a Free Consult &nbsp; <FaArrowRightLong /></button>
                                </div>
                                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                                    <div className="relative">
                                        <img
                                            src="/assets/img/visu-img5.webp"
                                            alt="image"
                                            className="rounded-xl w-full h-auto"
                                        /> 
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* // Section 1 */}


                    {/* Section 2 */}
                    <WhatWeDoSec />
                    {/* // Section 2 */}


                    {/* Section 3 */}
                    <section> 
                        <h2 className="mx-auto text-center font-semibold lg:text-[40px] text-[23px] lg:leading-[100%] leading-[30px] text-[var(--text-color1)] mb-5">
                            How our visualizations add value <span className="lg:block"> to your current project.</span>
                        </h2> 
                
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-[50px]">
                            {/* Card 1 */}
                            <div className="group relative overflow-hidden rounded-2xl  border border-slate-100 p-5 shadow-sm bg-indigo-50 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#14B8A6]/10">
                                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[var(--primary-color)] transition duration-300 group-hover:scale-x-100" />
                                <div className="mb-5 flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white font-bold">
                                    1
                                </div>
                                <h3 className="text-[17px] font-bold text-slate-900">Communicate</h3>
                                <p className="mt-1 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">your message with impact.</p>
                            </div>
                    
                            {/* Card 2 */}
                            <div className="group relative overflow-hidden rounded-2xl  border border-slate-100 p-5 shadow-sm bg-indigo-50 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#14B8A6]/10">
                                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[var(--primary-color)] transition duration-300 group-hover:scale-x-100" />
                                <div className="mb-5 flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white font-bold">
                                    2
                                </div>
                                <h3 className="text-[17px] font-bold text-slate-900">Enhance</h3>
                                <p className="mt-1 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">your product and project marketing.</p>
                            </div>
                    
                            {/* Card 3 */}
                            <div className="group relative overflow-hidden rounded-2xl  border border-slate-100 p-5 shadow-sm bg-indigo-50 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#14B8A6]/10">
                                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[var(--primary-color)] transition duration-300 group-hover:scale-x-100" />
                                <div className="mb-5 flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white font-bold">
                                    3
                                </div>
                                <h3 className="text-[17px] font-bold text-slate-900">Persuade</h3>
                                <p className="mt-1 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">your stakeholders.</p>
                            </div>
                    
                            {/* Card 4 */}
                            <div className="group relative overflow-hidden rounded-2xl  border border-slate-100 p-5 shadow-sm bg-indigo-50 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#14B8A6]/10">
                                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[var(--primary-color)] transition duration-300 group-hover:scale-x-100" />
                                <div className="mb-5 flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white font-bold">
                                    4
                                </div>
                                <h3 className="text-[17px] font-bold text-slate-900">Showcase your proposals</h3>
                                <p className="mt-1 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">as if they really exist!</p>
                            </div>
                        </div>
                    </section>
                    {/* // Section 3 */}

            
                    {/* Section 4 */}
                    <TrustedCompanies />
                    {/* // Section 4 */}


                    {/* Section 5 */}
                    <section className="container pb-20 pt-4 mt-10">
                        <div className="rounded-3xl bg-[var(--primary-color)] py-14 text-center shadow-2xl">
                            <h2 className="mt-4 font-semibold lg:text-[40px] text-[23px] lg:leading-[100%] leading-[30px] text-white sm:text-4xl">
                                Your project deserves optimal presentation. <span className="lg:block"> Let us do that for you!</span>
                            </h2>
                            <p className="mx-auto mt-3 max-w-xl text-[16px] text-white font-normal leading-[25px]">
                                With over 20 years of delivering <Link href="/rendering" className="text-black underline hover:text-white"> rendering </Link> services, we know how to delight our customers on budget and on time with <Link href="/animation" className="text-black underline hover:text-white"> animation </Link> and <Link href="/modeling" className="text-black underline hover:text-white"> modeling</Link>.
                            </p>
                            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-100 sm:text-base hover:text-[var(--primary-color)]">
                                Tell us about your project
                                <FaArrowRight className="h-3 w-3" />
                            </button>
                        </div>
                    </section>
                    {/* // Section 4 */}
                </div>
            </section>
            {/* // Page start here */}
        </>
    )
}
