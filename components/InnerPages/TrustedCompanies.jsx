import React from 'react';
import { Link } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function TrustedCompanies() {
    return (
        <>
            <section className="bg-white">
                    <div className="container"> 
                        <div className="grid grid-cols-12 lg:gap-8 gap-4 items-center">
                            <div className="lg:col-span-6 col-span-12">
                                <h3 className="font-semibold lg:text-[40px] text-[23px] lg:leading-[100%] leading-[30px] mb-5 text-[var(--text-color1)] lg:mt-0 mt-[40px]"> ABCreative services trusted by teams at companies including... </h3>
                                <button className="mt-[25px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] lg:text-[20px] text-[18px] font-medium leading-[100%]">See Cases &nbsp; <FaArrowRightLong /></button>
                            </div>
                            <div className="lg:col-span-6 col-span-12 bg-[url('/assets/img/pattern-img.png')] bg-cover bg-center lg:px-10 px-4 py-[50px]">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo1.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo2.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo3.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo4.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo5.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo6.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo7.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo8.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo9.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo10.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
        </>
    )
}
