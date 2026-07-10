"use client";

import React, { useRef } from 'react'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const projectSlides = [
    {
        id: 1,
        title: "3D Design",
        image: "/assets/img/slider1.png",
        link: "/assets/img/slider1",
    },
    {
        id: 2,
        title: "How Stuff Works",
        image: "/assets/img/slider2.png",
        link: "/assets/img/slider2",
    },
    {
        id: 3,
        title: "3D Visualization",
        image: "/assets/img/slider3.png",
        link: "/assets/img/slider3",
    },
    {
        id: 4,
        title: "Interior Rendering",
        image: "/assets/img/slider2.png",
        link: "/assets/img/slider2",
    },
];

export default function ProjectType() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;

        const card = container.querySelector("[data-card]");
        const cardWidth = card ? card.offsetWidth + 24 : 320; // width + gap

        container.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    return (
        <>
            <section className="bg-[var(--dark-bg)] py-[60px]">
                <div className="container">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-4">
                            <h6 className="uppercase font-medium text-[18px] leading-[100%] text-[var(--primary-color)] w-max relative after:content-[''] after:absolute after:w-[30px] after:h-[2px] after:bg-[var(--primary-color)] after:right-[-40px] after:top-[8px] mb-5">Visuals that works fast</h6>
                            <h3 className="font-semibold text-[55px] leading-[100%] text-white mb-5">Some Project Types</h3>
                            <p className="text-[20px] text-white font-normal leading-[25px]">We turn ideas into visual reality. explore the wide range of projects we design, visualize, and bring to life</p>
                            <button className="mt-[25px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] text-[20px] font-medium leading-[100%]">Explore All Projects Types &nbsp; <FaArrowRightLong /></button>
                        </div>

                        {/* Here is slider column */}
                        <div className="col-span-8">
                            <div
                                ref={scrollRef}
                                className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
                                           [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            >
                                {projectSlides.map((item) => (
                                    <div
                                        key={item.id}
                                        data-card
                                        className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                    >
                                        <SliderCard item={item} />
                                    </div>
                                ))}
                            </div>

                            {/* Arrow buttons — bottom right */}
                            <div className="flex justify-end gap-3 mt-8">
                                <button
                                    onClick={() => scroll("left")}
                                    aria-label="Previous slide"
                                    className="w-11 h-11 rounded-full border border-white flex items-center justify-center text-white hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)]"
                                >
                                    <FaArrowLeftLong size={16} />
                                </button>
                                <button
                                    onClick={() => scroll("right")}
                                    aria-label="Next slide"
                                    className="w-11 h-11 rounded-full border border-white flex items-center justify-center text-white hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)]"
                                >
                                    <FaArrowRightLong size={16} />
                                </button>
                            </div>
                        </div>
                        {/* // Here is slider column */}
                    </div>
                </div>
            </section>
        </>
    )
}

function SliderCard({ item }) {
    return (
        
        <a href={item.link}
            className="group relative block h-[380px] rounded-2xl overflow-hidden ring-1 ring-white/10"
        >
            <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-[var(--primary-color)] text-sm font-medium">
                    Read More
                    <FaArrowRightLong size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
            </div>
        </a>
    );
}