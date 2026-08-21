import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function WorksFast() {
    return (
        <>
            <section className="bg-[#FBFCFD] py-[70px]">
                <div className="container">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="lg:col-span-6 col-span-12">
                            <h6 className="uppercase font-medium text-[18px] leading-[100%] text-[var(--primary-color)] w-max relative after:content-[''] after:absolute after:w-[30px] after:h-[2px] after:bg-[var(--primary-color)] after:right-[-40px] after:top-[8px] mb-5">Visuals that works fast</h6>
                            <h3 className="font-semibold lg:text-[55px] text-[23px] lg:leading-[100%] leading-[30px] text-[var(--text-color1)] mb-5">Your Project Deserves Stunning Visuals - <span className="text-[var(--primary-color)]"> Fast </span></h3>
                            <p className="text-[20px] text-[var(--text-color2)] font-normal leading-[25px]">If the 3D visualization and 3D rendering of your project is less than optimal, it won’t grab the right people’s attention for the right reasons. To persuade your potential clients you need convincing project-specific 3D animation and visualization.</p>

                            <div className="flex items-center mt-[40px]">
                                <img
                                    src="/assets/img/strong-icon1.png"
                                    alt="image"
                                    className="mr-5"
                                />
                                <div className="">
                                    <h4 className="text-[20px] text-[var(--text-color1)] font-semibold leading-[25px] mb-[9px]">Make a Strong First Impression</h4>
                                    <p className="text-[18px] text-[var(--text-color1)] font-normal leading-[25px]">Good Visuals grab attention and reflect the quality of your team’s work.</p>
                                    <div className="border border-gray-200 w-[70%] relative top-[18px]"></div>
                                </div>
                            </div>
                            <div className="flex items-center mt-[40px]">
                                <img
                                    src="/assets/img/strong-icon1.png"
                                    alt="image"
                                    className="mr-5"
                                />
                                <div className="">
                                    <h4 className="text-[20px] text-[var(--text-color1)] font-semibold leading-[25px] mb-[9px]">Showcase Your Best Work</h4>
                                    <p className="text-[18px] text-[var(--text-color1)] font-normal leading-[25px]">Good Visuals grab attention and reflect the quality of your team’s work.</p>
                                    <div className="border border-gray-200 w-[70%] relative top-[18px]"></div>
                                </div>
                            </div>
                            <div className="flex items-center mt-[40px]">
                                <img
                                    src="/assets/img/strong-icon1.png"
                                    alt="image"
                                    className="mr-5"
                                />
                                <div className="">
                                    <h4 className="text-[20px] text-[var(--text-color1)] font-semibold leading-[25px] mb-[9px]">Avoid Unfinished Work</h4>
                                    <p className="text-[18px] text-[var(--text-color1)] font-normal leading-[25px]">Unconvincing images can leead to confusion and make your project seem incomplete.</p>
                                </div>
                            </div>

                            <button className="mt-[40px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] lg:text-[20px] text-[18px] font-medium leading-[100%]">Free Consultation &nbsp; <FaArrowRightLong /></button>
                        </div>
                        <div className="lg:col-span-6 col-span-12">
                            <div className="relative">
                                <img
                                    src="/assets/img/work-fast-img.png"
                                    alt="image"
                                    className=""
                                />
                                <div className="lg:w-[60%] w-[80%] shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-xl border-l-3 border-l-[var(--primary-color)] p-5 lg:absolute relative lg:bottom-[-80px] bottom-[auto] lg:left-[40px] left-[20px] bg-white">
                                    <img
                                        src="/assets/img/quote-img.png"
                                        alt="image"
                                        className="mb-4"
                                    />
                                    <p className="text-[18px] italic text-[var(--text-color2)] font-medium leading-[25px]">High- quality 3D visuals dont just look better - they communicate better, build trust, and drive decisions.</p>
                                </div>
                            </div>

                            <div className="mt-[140px] lg:flex justify-between bg-[#F1F8FA] py-[15px] px-[12px] rounded-xl shadow-[0px_5px_10px_rgba(0,0,0,0.15)] hidden">
                                <div className="flex items-center">
                                    <img
                                        src="/assets/img/project-icon1.png"
                                        alt="image"
                                        className="mr-3"
                                    />
                                    <div className="">
                                        <h5 className="text-[18px] font-semibold text-[var(--text-color1)] leading-[25px]">200+</h5>
                                        <p className="text-[16px] font-normal text-[var(--text-color2)]">Projects Delivered</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        src="/assets/img/project-icon2.png"
                                        alt="image"
                                        className="mr-3"
                                    />
                                    <div className="">
                                        <h5 className="text-[18px] font-semibold text-[var(--text-color1)] leading-[25px]">98+</h5>
                                        <p className="text-[16px] font-normal text-[var(--text-color2)]">Client Satisfaction</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        src="/assets/img/project-icon1.png"
                                        alt="image"
                                        className="mr-3"
                                    />
                                    <div className="">
                                        <h5 className="text-[18px] font-semibold text-[var(--text-color1)] leading-[25px]">Fast </h5>
                                        <p className="text-[16px] font-normal text-[var(--text-color2)]">Delivery Time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
