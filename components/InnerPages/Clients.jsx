"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6"; 

export default function Clients() {
     

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
                    <h1 className="text-4xl font-bold text-white mb-3">Clients</h1>
                    <div className="flex items-center justify-center gap-2 text-white text-[16px] font-medium">
                        <span>Home</span>
                        <IoIosArrowForward size={16} />
                        <span className="text-[var(--primary-color)]">Clients</span>
                    </div>
                </div>
            </div>
            {/* // Breadcrumb section */}


            {/* Page start here */}
            <section className="bg-white py-20"> 
                <div className="container">
                    {/* Section 1 */}
                        <section className="pb-[30px]">
                            <div className="container">
                                <div className="grid grid-cols-12 gap-6 items-center">
                                    <div className="col-span-6"> 
                                        <h3 className="font-semibold text-[55px] leading-[100%] text-[var(--text-color1)] mb-5"><span className="text-[var(--primary-color)]">ABCreative</span> recent cases </h3>
                                        <p className="text-[20px] text-[var(--text-color2)] font-normal leading-[25px]"><span className="text-[var(--primary-color)]">20 years</span> of delivering 3D product visualization and rendering services. We know how to delight our European and global business clients. Get inspired about how we can help you with the cases below!</p>
        
                                        <button className="mt-[40px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] text-[20px] font-medium leading-[100%]">Request a Free Consult &nbsp; <FaArrowRightLong /></button>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="relative">
                                            <img
                                                src="/assets/img/visu-img7.jpg"
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
                    <section className="container mt-[70px]">
                        <div className="grid grid-cols-12 gap-6">
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/work-img1.png"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-1.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">Our work BTG Positioning Systems: Project planning, 3D modeling of sensors, 3D animation, various render styles of multiple sequences. Compositing.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/work-img2.png"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-2.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">Provincie Gelderland: 3D modeling from 2D CAD of the rail terminal. 3D environment 10 km square area. 3D animated fly-over and renders made in Lumion.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/work-img3.png"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-3.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">Our work BTG Positioning Systems: Project planning, 3D modeling of sensors, 3D animation, various render styles of multiple sequences. Compositing.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-4img.png"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-4.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">OVitroTEM: Project planning, preview stages exploring how to show these minute scenes, 3D modeling, ‘Cycles’ rendering. x5 versions to completion.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-5img.jpg"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-5.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">Blue Heart: Project planning, 3D modeling. CAD models for use in Blender. 3D rendering & animation with voice-over and music. Post-production editing.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-6img.jpg"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-6.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">Siemens: 2D CAD into a low-poly 3D model. Realistic materials. Items logically named Gantry wheels, Boogies, Sill-beams, Legs, and Girders. Unity scene.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-7img.jpg"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-7.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">Unlimited Snow Mikos World: 3D modeling and theming. Lumion rendering and walkthrough. x5 versions. The whole series of renders got adjusted in Lightbox.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-8img.jpg"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-8.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">North Sea Port (Zeeland Seaports): Project planning, 3D model of Vlissingen Oost and Terneuzen areas, 3D modeling, rendering, animation, and video editing.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-9img.jpg"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-9.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">Delta3: Big-scene visualization for highway. Google street view camera-matching using Blender and Lumion. 3D modeling, 3D rendering, and photo-montage.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-10img.jpg"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-10.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">Esra: Project planning, product research, 3D modeling many types of racking systems & multiple series of renders for use on their upcoming new website.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-11img.jpg"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-11.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">Unlimited Snow Kaifeng: 3D modeling and different stages of design theming with US. Lumion lighting, rendering, and walkthrough. Renders at various stages.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-12img.jpg"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-12.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">HVC Group: 3D environment model of 10km square with the detailed solarpark in the center. Renders and flyover in Lumion. On-screen text, titles & music track.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-13img.jpg"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-13.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">ABCreative: Software comparison, replication of client scenarios, Blender’s interface, how to do modeling, materials, lighting, 3D animation, rendering etc.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="lg:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-6 items-stretch rounded-2xl border border-slate-100 p-2 shadow-sm bg-indigo-50    ">
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-14img.jpg"
                                                alt="image"
                                                className="rounded-xl w-full h-full object-cover"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="h-full">
                                            <img
                                                src="/assets/img/brand-14.jpg"
                                                alt="image"
                                                className="w-[50%] h-auto"
                                            /> 
                                            <div className="mb-4"></div>
                                            <h3 className="text-[20px] font-bold text-slate-900">Our work:</h3>
                                            <div className="mb-2"></div>
                                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">T3S BV: Research Padel-tennis, 3D modeling & materials in Blender. People, vehicles, trees, and flowers with day/night lighting, cameras & rendering in Lumion.</p>
                                            <button className="mt-[20px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-5 py-3 rounded-lg transition border border-[var(--primary-color)] text-[17px] font-medium leading-[100%]">Read more about this case &nbsp; <FaArrowRightLong /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </section>
                    {/* // Section 2 */}
                </div>
            </section>
            {/* // Page start here */}
        </>
    )
}
