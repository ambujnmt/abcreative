import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function HomeCta() {
    return (
        <>
            <section className="relative">
                <img
                    src="/assets/img/left-circle.png"
                    alt="image"
                    className="absolute left-0 bottom-0 w-[180px] h-auto lg:block hidden"
                />
                <img
                    src="/assets/img/right-circle.png"
                    alt="image"
                    className="absolute right-0 top-0 w-[180px] h-auto lg:block hidden"
                />
                <div className="container py-[80px]">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 flex justify-center mb-[20px] mt-[70px]">
                            <div className="max-w-4xl text-center"> 
                                <h3 className="font-semibold lg:text-[55px] text-[35px] lg:leading-[65px] leading-[45px] text-[var(--text-color1)] mb-5">Your Project Deserves Optimal Presentation.
                                    <span className="text-[var(--primary-color)] block">Let us Do That For You!</span>
                                </h3>
                                <p className="text-[20px] text-[var(--text-color2)] font-normal leading-[25px]">With over 20 years of delivering <u> rendering </u> services, we know how to delight our customers on budget and on time with <u> animation </u> and <u> modeling. </u></p>
                            </div>
                        </div>
                        <div className="col-span-12 block m-auto">
                            <button className="flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] lg:text-[20px] text-[18px] font-medium leading-[100%]">Tell us about your project &nbsp; <FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
