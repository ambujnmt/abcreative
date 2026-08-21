import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function SimpleStep() {
    return (
        <>
            <section className="bg-[#F9FAFC] py-[50px]">
                <div className="container">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 flex justify-center mb-[50px]">
                            <div className="max-w-3xl text-center">
                                <h6 className="block m-auto w-max text-[18px] leading-[100%] text-[var(--primary-color)] relative before:content-[''] before:absolute before:w-[40px] before:h-[4px] before:bg-[var(--primary-color)] before:top-[7px] before:left-[-50px] after:content-[''] after:absolute after:bg-[var(--primary-color)] after:w-[40px] after:h-[4px] after:top-[7px] after:right-[-50px] uppercase mb-4">What Happens Next</h6>
                                <h3 className="font-semibold lg:text-[55px] text-[23px] lg:leading-[100%] leading-[30px] text-[var(--text-color1)] mb-5">Simple Step, Solid Results</h3>
                                <p className="text-[20px] text-[var(--text-color2)] font-normal leading-[25px]">We follow a provenprocess to understand your needs and deliver high- quality 3D viual solutions.</p>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6 col-span-12">
                            <div className="text-center">
                                <img
                                    src="/assets/img/step1.png"
                                    alt="image"
                                    className="block m-auto mb-10"
                                />
                                <img
                                    src="/assets/img/step1-img.png"
                                    alt="image"
                                    className="block m-auto mb-10"
                                />
                                <h5 className="text-[20px] text-[var(--text-color1)] font-semibold leading-[25px] mb-3">Meetings</h5>
                                <p className="text-[18px] text-[var(--text-color1)] font-normal leading-[25px]">We start by understanding your project goals, requirements, and expectations.</p>
                            </div>
                        </div>
                        <div className="lg:col-span-4 md:col-span-6 col-span-12">
                            <div className="text-center">
                                <img
                                    src="/assets/img/step2.png"
                                    alt="image"
                                    className="block m-auto mb-10"
                                />
                                <img
                                    src="/assets/img/step2-img.png"
                                    alt="image"
                                    className="block m-auto mb-10"
                                />
                                <h5 className="text-[20px] text-[var(--text-color1)] font-semibold leading-[25px] mb-3"> Plan of attack</h5>
                                <p className="text-[18px] text-[var(--text-color1)] font-normal leading-[25px]">We analyze, strategize, and create a clear plan tailored to your projects.</p>
                            </div>
                        </div>
                        <div className="lg:col-span-4 md:col-span-6 col-span-12">
                            <div className="text-center">
                                <img
                                    src="/assets/img/step3.png"
                                    alt="image"
                                    className="block m-auto mb-10"
                                />
                                <img
                                    src="/assets/img/step3-img.png"
                                    alt="image"
                                    className="block m-auto mb-10"
                                />
                                <h5 className="text-[20px] text-[var(--text-color1)] font-semibold leading-[25px] mb-3">We start work</h5>
                                <p className="text-[18px] text-[var(--text-color1)] font-normal leading-[25px]">our team gets to work, ensuring quality, clearity, and timely delivery.</p>
                            </div>
                        </div>

                        <div className="col-span-12 block m-auto">
                            <button className="mt-[25px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] lg:text-[20px] text-[18px] font-medium leading-[100%]">Contact Us &nbsp; <FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
