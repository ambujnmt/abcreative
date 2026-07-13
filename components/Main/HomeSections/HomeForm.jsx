 
"use client"
import React from 'react'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiArrowRight } from "react-icons/hi"

export default function HomeForm() {
    return (
        <section className="py-[50px] bg-cover bg-center relative before:content-[''] before:absolute before:bg-[var(--primary-color)] before:opacity-85 before:w-full before:h-auto before:top-0 before:inset-0" style={{ backgroundImage: "url('/assets/img/form-bg-img.png')" }}>
            <div className="container">
                <div className="relative">   
                    <div className="relative grid grid-cols-12 gap-10">
                        {/* Left Side */}
                        <div className="col-span-5">
                            <div className="flex flex-col justify-center text-white">
                                <h6 className="flex items-center gap-3 text-[18px] uppercase tracking-wide font-medium mb-4">
                                    Get In Touch
                                    <span className="w-8 h-[2px] bg-white/60 inline-block"></span>
                                </h6>
                                <h2 className="text-[55px] md:text-[44px] font-semibold leading-[100%] mb-5">
                                    Send Us Email
                                </h2>
                                <p className="text-[20px] leading-[25px] font-normal text-white/90 mb-10 max-w-md">
                                    Have a project in mind or a question for us? We’d love to hear from you. Fill  out the form and we’ll get back to you as soon as possible.
                                </p>

                                <div className="flex flex-col gap-5">
                                    {/* Email */}
                                    <div className="flex items-center gap-4">
                                        <span className="flex-shrink-0 w-11 h-11 rounded-full border border-white/50 flex items-center justify-center">
                                            <HiOutlineMail className="text-white text-2xl" />
                                        </span>
                                        <div>
                                            <h6 className="font-semibold text-[20px]">Email Us</h6>
                                            <p className="text-white/80 text-[18px]">info@abcreation.com</p>
                                        </div>
                                    </div>

                                    <div className="w-full h-[1px] bg-white/20"></div>

                                    {/* Phone */}
                                    <div className="flex items-center gap-4">
                                        <span className="flex-shrink-0 w-11 h-11 rounded-full border border-white/50 flex items-center justify-center">
                                            <HiOutlinePhone className="text-white text-2xl" />
                                        </span>
                                        <div>
                                            <h6 className="font-semibold text-[20px]">Call Us</h6>
                                            <p className="text-white/80 text-[18px]">+ 3125641258</p>
                                        </div>
                                    </div>

                                    <div className="w-full h-[1px] bg-white/20"></div>

                                    {/* Location */}
                                    <div className="flex items-center gap-4">
                                        <span className="flex-shrink-0 w-11 h-11 rounded-full border border-white/50 flex items-center justify-center">
                                            <HiOutlineLocationMarker className="text-white text-2xl" />
                                        </span>
                                        <div>
                                            <h6 className="font-semibold text-[20px]">Our Location</h6>
                                            <p className="text-white/80 text-[18px]">Netherland</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form Card */}
                        <div className="col-span-7">
                            <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-6 md:p-8">
                                <form className="flex flex-col gap-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-white text-[18px] font-normal">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your Full Name"
                                                className="w-full px-4 py-3 rounded-lg bg-white text-[var(--text-color1,#222)] placeholder:text-gray-400 text-[14px] outline-none focus:ring-2 focus:ring-white/70"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-white text-[18px] font-normal">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your Full Name"
                                                className="w-full px-4 py-3 rounded-lg bg-white text-[var(--text-color1,#222)] placeholder:text-gray-400 text-[14px] outline-none focus:ring-2 focus:ring-white/70"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-white text-[18px] font-normal">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your Number"
                                                className="w-full px-4 py-3 rounded-lg bg-white text-[var(--text-color1,#222)] placeholder:text-gray-400 text-[14px] outline-none focus:ring-2 focus:ring-white/70"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-white text-[18px] font-normal">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="How can we help"
                                                className="w-full px-4 py-3 rounded-lg bg-white text-[var(--text-color1,#222)] placeholder:text-gray-400 text-[14px] outline-none focus:ring-2 focus:ring-white/70"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-white text-[18px] font-normal">
                                            Message
                                        </label>
                                        <textarea
                                            rows={5}
                                            placeholder="Tell us more about your project or question"
                                            className="w-full px-4 py-3 rounded-lg bg-white text-[var(--text-color1,#222)] placeholder:text-gray-400 text-[14px] outline-none resize-none focus:ring-2 focus:ring-white/70"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="mt-[25px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] text-[20px] w-full text-center justify-center font-medium leading-[100%]"
                                    >
                                        Send Message
                                        <HiArrowRight className="text-lg" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}