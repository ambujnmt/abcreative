import { Link } from '@heroui/react';
import React, { useContext, useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
 
export default function Hero() {
 
 
    return (
      <>
      
      <section className="relative h-screen w-full overflow-hidden"> 
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/img/hero-vdo.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div> 
        <div className="relative z-10 container mx-auto h-full px-4">
          <div className="grid grid-cols-12 absolute text-left left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 z-[2] w-full">
            <div className="col-span-12 lg:col-span-7">
              <h1 className="text-white text-[63.49px] font-semibold leading-[70px] mb-6">
                3D Visualization forModern <span className="text-[var(--primary-color)]"> Businesses </span>
              </h1> 
              <p className="text-white/90 text-lg md:text-xl mb-8">
                Premium 3D animation, modeling, and rendering services for business-to-business clients.
              </p> 
              <div className="mt-10"></div>
              <button className="bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] text-[20px] font-medium leading-[100%]">
                Request a Free Consults
              </button> 
              <button className="hover:bg-[var(--primary-color)] text-white ml-4 px-7 py-4 rounded-lg transition border border-white-200 text-[20px] font-medium leading-[100%]">
                View Our Work
              </button> 
              <div className="mb-[50px]"></div>
            </div>

            {/* Hero Counter */}
            <div className="col-span-7">
              <div className="grid grid-cols-12">
                <div className="col-span-4">
                  <h5 className="font-semibold text-[var(--primary-color)] text-[22px] leading-[100%] mb-2">10+</h5>
                  <p className="text-white text-[18px] leading-[100%] font-normal">Years Experience</p>
                </div>
                <div className="col-span-4">
                  <h5 className="font-semibold text-[var(--primary-color)] text-[22px] leading-[100%] mb-2">500+</h5>
                  <p className="text-white text-[18px] leading-[100%] font-normal">Projects Completed</p>
                </div>
                <div className="col-span-4">
                  <h5 className="font-semibold text-[var(--primary-color)] text-[22px] leading-[100%] mb-2">100+</h5>
                  <p className="text-white text-[18px] leading-[100%] font-normal">Client Satisfaction</p>
                </div>
              </div>
            </div>
            {/* // Hero Counter */}
          </div> 
          {/* // Hero Counter */}

        </div>
      </section>


      {/* Marquee Section */}
      <section className='bg-black py-5'>
        <div className="container">
          <marquee>
            <ul className="flex items-center gap-10">
              <li>
                <img
                  src="/assets/img/slide-img1.png"
                  alt="image"
                />
              </li>
              <li>
                <img
                  src="/assets/img/slide-img2.png"
                  alt="image"
                />
              </li>
              <li>
                <img
                  src="/assets/img/slide-img3.png"
                  alt="image"
                />
              </li>
              <li>
                <img
                  src="/assets/img/slide-img4.png"
                  alt="image"
                />
              </li>
              <li>
                <img
                  src="/assets/img/slide-img5.png"
                  alt="image"
                />
              </li>
              <li>
                <img
                  src="/assets/img/slide-img6.png"
                  alt="image"
                />
              </li>
            </ul>
          </marquee>
        </div>
      </section>
      {/* // Marquee Section */}

      </>
    )
}
 
 