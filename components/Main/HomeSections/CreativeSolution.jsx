import React from 'react'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

export default function CreativeSolution() {
    return (
        <>
            <section className="bg-[var(--dark-bg)] py-[60px]">
                <div className="container">
                    <div className="grid grid-cols-12 lg:gap-11 gap-4">
                        <div className="lg:col-span-6 col-span-12">
                            <h6 className="uppercase font-medium text-[18px] leading-[100%] text-[var(--primary-color)] w-max relative after:content-[''] after:absolute after:w-[30px] after:h-[2px] after:bg-[var(--primary-color)] after:right-[-40px] after:top-[8px] mb-5">About ABCreative</h6>
                            <h3 className="font-semibold lg:text-[55px] text-[23px] lg:leading-[100%] leading-[30px] text-white mb-5">Creative Solutions. Real <span class="text-[var(--primary-color)]"> Impact </span>.</h3>
                            <p className="text-[20px] text-white font-normal leading-[25px]">ABCreative Offers 3D animation and 3D visualization with personal service. with over 15 Years of experiece, we partnerwith clients woldwide to deliver stunning visuals that are on budget and on time.</p>
                            <div className="mt-[30px]"></div>
                            <div className="flex items-center p-[20px] rounded-xl border border-gray-700 mb-4">
                                <img
                                    src="/assets/img/team-goal.png"
                                    alt="image"
                                    className="mr-5"
                                />
                                <div className="">
                                    <h5 className="text-[20px] text-white font-semibold leading-[25px] mb-4">Team Goal</h5>
                                    <p className="text-[18px] text-white font-normal leading-[25px]">We are passionate about our work and the relationships we build with our clients.</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[20px] rounded-xl border border-gray-700 mb-4">
                                <img
                                    src="/assets/img/approach.png"
                                    alt="image"
                                    className="mr-5"
                                />
                                <div className="">
                                    <h5 className="text-[20px] text-white font-semibold leading-[25px] mb-4">Our Approach</h5>
                                    <p className="text-[18px] text-white font-normal leading-[25px]">We ue the latest techniques and thecontinue to learn, innovate, adn grow with every project.</p>
                                </div>
                            </div>
                            <div className="mt-[40px]"></div>
                            <button className="mt-[25px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] text-[20px] w-full text-center justify-center font-medium leading-[100%]">Read More &nbsp; <FaArrowRightLong /></button>
                        </div>
                        <div className="lg:col-span-6 col-span-12 relative">
                            <img
                                src="/assets/img/creative-solution-img.png"
                                alt="image"
                                className="object-cover h-[100%] rounded-xl"
                            />
                            <div className="absolute lg:bottom-[30px] bottom-[0px] lg:left-[30px] left-[0px] lg:block hidden">
                                <div className="">
                                    <div className="flex items-center p-[20px] rounded-xl bg-white w-[80%]">
                                        <img
                                            src="/assets/img/approach.png"
                                            alt="image"
                                            className="mr-5"
                                        />
                                        <div className="">
                                            <h5 className="text-[20px] text-[var(--text-color1)] font-semibold leading-[25px]">15+ Years</h5>
                                            <p className="text-[18px] text-[var(--text-color2)] font-normal leading-[25px]">of delivering high-quality visual solutions.</p>
                                        </div>
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
