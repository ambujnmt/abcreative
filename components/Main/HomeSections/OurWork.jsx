import { Link } from '@heroui/react'
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function OurWork() {
    return (
        <>
            <section className='bg-[var(--dark-bg)] mt-[60px] py-[70px]'>
                <div className="container">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12">
                            <div className="flex justify-between items-center">
                                <p className="uppercase text-[18px] leading-[100%] text-white w-max relative after:content-[''] after:absolute after:w-[30px] after:h-[2px] after:bg-white after:right-[-40px] after:top-[8px]">OUR WORK</p>
                                <Link href="#" className="text-white hover:text-[var(--primary-color)] transition-colors duration-300 ease-in-out group">View All Projects &nbsp; <FaLongArrowAltRight className="text-white group-hover:text-[var(--primary-color)]" /></Link>
                            </div>
                        </div>
                        {/* == column 5 == */}
                        <div className="lg:col-span-5 col-span-12 group">
                            <h3 className="font-semibold lg:text-[55px] text-[35px] lg:leading-[70px] leading-[45px] text-white mb-[50px]">A Glimpse Of <br /> Our Projects</h3>
                            <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/90 after:via-black/0 after:to-transparent">
                                <img
                                    src="/assets/img/work-img1.png"
                                    alt="image"
                                    className="w-full h-[330px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="flex items-center justify-between absolute bottom-5 left-5 right-5 z-10">
                                    <img
                                        src="/assets/img/work-logo1.png"
                                        alt="image"
                                        className="w-auto h-auto object-cover"
                                    />
                                    <Link href="#" className="transition-colors duration-500 ease-in-out group-hover:rotate-[39deg]">
                                        <div className="w-[45px] h-[45px] rounded-full border border-white-100 flex justify-center items-center group-hover:border-[var(--primary-color)] transition-colors duration-500 ease-in-out">
                                            <FaArrowRightLong className="text-white text-[20px] -rotate-[37deg] group-hover:text-[var(--primary-color)] transition-colors duration-500 ease-in-out" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* == // column 5 == */}
                        {/* == column 7 == */}
                        <div className="lg:col-span-7 col-span-12 mt-[30px]">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="lg:col-span-6 col-span-12 group">
                                    <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/90 after:via-black/0 after:to-transparent">
                                        <img
                                            src="/assets/img/work-img2.png"
                                            alt="image"
                                            className="w-full h-[230px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                        <div className="flex items-center justify-between absolute bottom-5 left-5 right-5 z-10">
                                            <img
                                                src="/assets/img/work-logo2.png"
                                                alt="image"
                                                className="w-auto h-auto object-cover"
                                            />
                                            <Link href="#" className="transition-colors duration-500 ease-in-out group-hover:rotate-[39deg]">
                                                <div className="w-[45px] h-[45px] rounded-full border border-white-100 flex justify-center items-center group-hover:border-[var(--primary-color)] transition-colors duration-500 ease-in-out">
                                                    <FaArrowRightLong className="text-white text-[20px] -rotate-[37deg] group-hover:text-[var(--primary-color)] transition-colors duration-500 ease-in-out" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 col-span-12 group">
                                    <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/90 after:via-black/0 after:to-transparent">
                                        <img
                                            src="/assets/img/work-img3.png"
                                            alt="image"
                                            className="w-full h-[230px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                        <div className="flex items-center justify-between absolute bottom-5 left-5 right-5 z-10">
                                            <img
                                                src="/assets/img/work-logo3.png"
                                                alt="image"
                                                className="w-auto h-auto object-cover"
                                            />
                                            <Link href="#" className="transition-colors duration-500 ease-in-out group-hover:rotate-[39deg]">
                                                <div className="w-[45px] h-[45px] rounded-full border border-white-100 flex justify-center items-center group-hover:border-[var(--primary-color)] transition-colors duration-500 ease-in-out">
                                                    <FaArrowRightLong className="text-white text-[20px] -rotate-[37deg] group-hover:text-[var(--primary-color)] transition-colors duration-500 ease-in-out" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 col-span-12 group">
                                    <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/90 after:via-black/0 after:to-transparent">
                                        <img
                                            src="/assets/img/work-img4.png"
                                            alt="image"
                                            className="w-full h-[230px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                        <div className="flex items-center justify-between absolute bottom-5 left-5 right-5 z-10">
                                            <img
                                                src="/assets/img/work-logo2.png"
                                                alt="image"
                                                className="w-auto h-auto object-cover"
                                            />
                                            <Link href="#" className="transition-colors duration-500 ease-in-out group-hover:rotate-[39deg]">
                                                <div className="w-[45px] h-[45px] rounded-full border border-white-100 flex justify-center items-center group-hover:border-[var(--primary-color)] transition-colors duration-500 ease-in-out">
                                                    <FaArrowRightLong className="text-white text-[20px] -rotate-[37deg] group-hover:text-[var(--primary-color)] transition-colors duration-500 ease-in-out" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 col-span-12 group">
                                    <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/90 after:via-black/0 after:to-transparent">
                                        <img
                                            src="/assets/img/work-img5.png"
                                            alt="image"
                                            className="w-full h-[230px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                        <div className="flex items-center justify-between absolute bottom-5 left-5 right-5 z-10">
                                            <img
                                                src="/assets/img/work-logo2.png"
                                                alt="image"
                                                className="w-auto h-auto object-cover"
                                            />
                                            <Link href="#" className="transition-colors duration-500 ease-in-out group-hover:rotate-[39deg]">
                                                <div className="w-[45px] h-[45px] rounded-full border border-white-100 flex justify-center items-center group-hover:border-[var(--primary-color)] transition-colors duration-500 ease-in-out">
                                                    <FaArrowRightLong className="text-white text-[20px] -rotate-[37deg] group-hover:text-[var(--primary-color)] transition-colors duration-500 ease-in-out" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* == // column 7 == */}
                    </div>
                </div>
            </section>
        </>
    )
}
