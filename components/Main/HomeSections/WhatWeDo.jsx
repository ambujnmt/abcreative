import { Link } from '@heroui/react'
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";


export default function WhatWeDo() {
    return (
        <>
            <div className="container my-[70px]">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 flex justify-center">
                        <div className="max-w-3xl text-center">
                            <h6 className="block m-auto w-max text-[18px] leading-[100%] text-[var(--primary-color)] relative before:content-[''] before:absolute before:w-[40px] before:h-[4px] before:bg-[var(--primary-color)] before:top-[7px] before:left-[-50px] after:content-[''] after:absolute after:bg-[var(--primary-color)] after:w-[40px] after:h-[4px] after:top-[7px] after:right-[-50px] uppercase mb-4">What We Do</h6>
                            <h3 className="font-semibold text-[55px] leading-[100%] text-[var(--text-color1)] mb-5">3D Viusalization</h3>
                            <p className="text-[20px] text-[var(--text-color2)] font-normal leading-[25px]">Visualizing for our clients, we use a mix of skills, different for each project. Each visualization project compromises of one of more of the following subdomains:</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6 mt-[60px]">
                    <div className="col-span-3 group">
                        <div className="border-2 border-[var(--text-color2)] rounded-xl overflow-hidden h-full">
                            <img
                                src="/assets/img/Animation.jpg"
                                alt="image"
                                className="h-[213px] object-cover rounded-t-[10px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="mt-[-30px] ml-[20px]">
                                <img
                                    src="/assets/img/icon1.png"
                                    alt="image"
                                    className="z-10 relative"
                                />
                            </div>
                            <div className="px-5 pb-4">
                                <Link href="/animation">
                                    <h4 className="text-[20px] leading-[100%] font-semibold text-[var(--text-color1)] mt-[20px]">Animation</h4>
                                </Link>
                                <div className="border-b-2 border-[var(--primary-color)] w-[30px] mt-1 mb-3"></div>
                                <p className="text-[var(--text-color2)] text-[16px] leading-[100%] font-normal mb-3"> Animation Showcase your latest development, product, or services with our 3D animation service.</p>
                                <Link href="/animation" className="text-[var(--primary-color)] text-[16px] hover:text-[var(--text-color1)] transition-colors duration-300 ease-in-out">Read More &nbsp; <FaLongArrowAltRight /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 group">
                        <div className="border-2 border-[var(--text-color2)] rounded-xl overflow-hidden h-full">
                            <img
                                src="/assets/img/Modeling.jpg"
                                alt="image"
                                className="h-[213px] object-cover rounded-t-[10px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="mt-[-30px] ml-[20px]">
                                <img
                                    src="/assets/img/icon1.png"
                                    alt="image"
                                    className="z-10 relative"
                                />
                            </div>
                            <div className="px-5 pb-4">
                                <Link href="/modeling">
                                    <h4 className="text-[20px] leading-[100%] font-semibold text-[var(--text-color1)] mt-[20px]">Modeling</h4>
                                </Link>
                                <div className="border-b-2 border-[var(--primary-color)] w-[30px] mt-1 mb-3"></div>
                                <p className="text-[var(--text-color2)] text-[16px] leading-[100%] font-normal mb-3">Have our 3D modeling service make an accurate digital representation of your project.</p>
                                <Link href="/modeling" className="text-[var(--primary-color)] text-[16px] hover:text-[var(--text-color1)] transition-colors duration-300 ease-in-out">Read More &nbsp; <FaLongArrowAltRight /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 group">
                        <div className="border-2 border-[var(--text-color2)] rounded-xl overflow-hidden h-full">
                            <img
                                src="/assets/img/Rendering.jpg"
                                alt="image"
                                className="h-[213px] object-cover rounded-t-[10px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="mt-[-30px] ml-[20px]">
                                <img
                                    src="/assets/img/icon1.png"
                                    alt="image"
                                    className="z-10 relative"
                                />
                            </div>
                            <div className="px-5 pb-4">
                                <Link href="/rendering">
                                    <h4 className="text-[20px] leading-[100%] font-semibold text-[var(--text-color1)] mt-[20px]">Rendering</h4>
                                </Link>
                                <div className="border-b-2 border-[var(--primary-color)] w-[30px] mt-1 mb-3"></div>
                                <p className="text-[var(--text-color2)] text-[16px] leading-[100%] font-normal mb-3">3D images produced by our 3D rendering service help you market your ideas with style.</p>
                                <Link href="/rendering" className="text-[var(--primary-color)] text-[16px] hover:text-[var(--text-color1)] transition-colors duration-300 ease-in-out">Read More &nbsp; <FaLongArrowAltRight /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 group">
                        <div className="border-2 border-[var(--text-color2)] rounded-xl overflow-hidden h-full">
                            <img
                                src="/assets/img/Visualization.jpg"
                                alt="image"
                                className="h-[213px] object-cover rounded-t-[10px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="mt-[-30px] ml-[20px]">
                                <img
                                    src="/assets/img/icon1.png"
                                    alt="image"
                                    className="z-10 relative"
                                />
                            </div>
                            <div className="px-5 pb-4">
                                <Link href="/visualization">
                                    <h4 className="text-[20px] leading-[100%] font-semibold text-[var(--text-color1)] mt-[20px]">Visualization</h4>
                                </Link>
                                <div className="border-b-2 border-[var(--primary-color)] w-[30px] mt-1 mb-3"></div>
                                <p className="text-[var(--text-color2)] text-[16px] leading-[100%] font-normal mb-3">3D visualizations are computer-generated images that create the illusion of three-dimensional space.</p>
                                <Link href="/visualization" className="text-[var(--primary-color)] text-[16px] hover:text-[var(--text-color1)] transition-colors duration-300 ease-in-out">Read More &nbsp; <FaLongArrowAltRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
