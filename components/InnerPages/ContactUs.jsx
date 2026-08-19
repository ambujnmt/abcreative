"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "@heroui/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";


export default function ContactUs() {
     

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
                    <h1 className="text-4xl font-bold text-white mb-3">Contact Us</h1>
                    <div className="flex items-center justify-center gap-2 text-white text-[16px] font-medium">
                        <span>Home</span>
                        <IoIosArrowForward size={16} />
                        <span className="text-[var(--primary-color)]">Contact Us</span>
                    </div>
                </div>
            </div>
            {/* // Breadcrumb section */}


            {/* Page start here */}
            <section className="container relative w-full bg-white py-16 overflow-hidden">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
                    {/* LEFT: Form */}
                    <div className="w-full">
                        <h2 className="font-semibold text-[40px] leading-[100%] text-[var(--text-color1)] mb-5">
                            Let&apos;s talk
                        </h2>
                        <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                            To request a quote or want to meet up for coffee, contact us
                            directly or fill out the form and we will get back to you
                            promptly.
                        </p>
                
                        <form className="mt-8 space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full rounded-xl border border-slate-200 bg-indigo-50/60 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                                />
                            </div>
                
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Your Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full rounded-xl border border-slate-200 bg-indigo-50/60 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                                />
                            </div>
                
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Type something if you want..."
                                    className="w-full resize-none rounded-xl border border-slate-200 bg-indigo-50/60 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                                />
                            </div>
                
                            <button type="submit" className="mt-[40px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] text-[20px] font-medium leading-[100%]">Send Message &nbsp; <FaArrowRightLong /></button>
                        </form>
                    </div>
            
                    {/* RIGHT: Illustration + contact info */}
                    <div className="flex w-full flex-col items-center gap-10">
                        {/* Illustration */}
                        <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
                            {/* soft circle backdrop */}
                            <div className="absolute inset-0 rounded-full bg-indigo-50" />
                
                            {/* decorative floating shapes */}
                            <span className="absolute -top-2 left-8 h-3 w-3 rounded-full bg-emerald-400" />
                            <span className="absolute right-2 top-6 text-violet-300">✦</span>
                            <span className="absolute -right-1 top-1/3 h-3 w-3 rounded-full bg-cyan-400" />
                            <span className="absolute right-6 top-1/2 text-lg text-slate-300">✕</span>
                            <span className="absolute bottom-4 right-2 h-4 w-4 rounded-full border-2 border-cyan-400" />
                            <span className="absolute -left-2 top-1/2 h-3 w-3 rounded-full border-2 border-indigo-400" />
                            <span className="absolute bottom-10 left-0 text-slate-300">✕</span>
                            <span className="absolute bottom-0 left-1/4 h-2 w-2 rounded-full bg-yellow-400" />
                            <span className="absolute left-6 bottom-16 text-pink-400">+</span>
                            <svg
                                className="absolute bottom-6 left-8 h-10 w-16 text-pink-300"
                                viewBox="0 0 60 30"
                                fill="none"
                            >
                                <path
                                    d="M2 24C10 8 24 2 40 6C48 8 52 14 58 12"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                
                            {/* chat bubble badge */}
                            <div className="absolute -left-3 top-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500 shadow-lg shadow-violet-200">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                                    <path d="M12 2C6.48 2 2 5.94 2 10.8c0 2.77 1.47 5.24 3.77 6.85-.12.9-.5 2.36-1.4 3.85 1.9-.3 3.55-1.16 4.6-1.86.98.25 2.02.39 3.03.39 5.52 0 10-3.94 10-8.8S17.52 2 12 2z" />
                                </svg>
                            </div>
                
                            {/* bell badge */}
                            <div className="absolute -top-2 right-10 flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 shadow-lg shadow-violet-200">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                                    <path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22zm7-6.5V11c0-3.34-1.8-6.14-5-6.87V3.5a2 2 0 1 0-4 0v.63C6.8 4.86 5 7.65 5 11v4.5L3 17.5V19h18v-1.5l-2-2z" />
                                </svg>
                            </div>
                
                            {/* central envelope card */}
                            <div className="relative flex h-36 w-44 flex-col items-center justify-end rounded-2xl bg-white shadow-xl">
                                {/* paper poking out */}
                                <div className="absolute -top-8 left-1/2 h-16 w-24 -translate-x-1/2 rounded-md border border-slate-100 bg-white shadow-sm">
                                    <div className="space-y-1.5 p-2.5">
                                        <span className="block h-1 w-full rounded bg-indigo-200" />
                                        <span className="block h-1 w-4/5 rounded bg-indigo-200" />
                                        <span className="block h-1 w-full rounded bg-indigo-200" />
                                        <span className="block h-1 w-3/5 rounded bg-indigo-200" />
                                    </div>
                                </div>
                                {/* envelope shape */}
                                <div className="relative h-20 w-full overflow-hidden rounded-b-2xl bg-gradient-to-br from-indigo-500 to-violet-600">
                                    <svg
                                        viewBox="0 0 176 80"
                                        className="absolute inset-0 h-full w-full"
                                        preserveAspectRatio="none"
                                    >
                                        <polygon points="0,0 88,45 176,0" fill="rgba(255,255,255,0.18)" />
                                    </svg>
                                </div>
                                {/* paper plane */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="absolute -right-4 top-4 h-8 w-8 rotate-12 fill-amber-400 drop-shadow"
                                >
                                    <path d="M2 12l19-9-6 19-4-7-6 3z" />
                                </svg>
                            </div>
                        </div>
            
                        {/* Contact details */}
                        <div className="w-full max-w-lg space-y-4">
                            <div className="flex items-start gap-3">
                                <HiOutlineLocationMarker className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--primary-color)]" />
                                <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                
                            <div className="flex items-center gap-3">
                                <HiOutlinePhone className="h-5 w-5 flex-shrink-0 text-[var(--primary-color)]" />
                                <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">+1 (203) 123456789</p>
                            </div>
                
                            <div className="flex items-center gap-3">
                                <HiOutlineMail className="h-5 w-5 flex-shrink-0 text-[var(--primary-color)]" />
                                <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">contactus@abcreative.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* // Page start here */}
        </>
    )
}
