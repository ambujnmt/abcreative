import React, { useContext, useEffect, useState } from "react";
import { Link } from "@heroui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";
 
export default function Footer() {
 
 
 
  return ( 
      <section className="bg-[var(--dark-bg)] pt-[80px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-10">
            {/* Column 1 */}
            <div className="col-span-5">
              <img
                src="/assets/img/logo.png"
                alt="image"
                className="w-auto h-auto mb-5"
              />
  
              <p className="text-white text-[18px] font-normal leading-[138%]">
                Premium 3D visualisation & Rendering <br /> services for businesses worldwide,
              </p>
  
              <div className="mt-[30px]">
                <ul className="flex items-center">
                  <li>
                    <Link
                      href="#"
                      className="w-[50px] h-[50px] mr-[10px] rounded-full border border-white-200 flex items-center justify-center"
                    >
                      <FaInstagram className="text-[23px] text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="w-[50px] h-[50px] mr-[10px] rounded-full border border-white-200 flex items-center justify-center"
                    >
                      <BsTwitterX className="text-[23px] text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="w-[50px] h-[50px] mr-[10px] rounded-full border border-white-200 flex items-center justify-center"
                    >
                      <FaFacebookF className="text-[23px] text-white" />
                    </Link>
                  </li>   
                  <li>
                    <Link
                      href="#"
                      className="w-[50px] h-[50px] mr-[10px] rounded-full border border-white-200 flex items-center justify-center"
                    >
                      <FaLinkedinIn className="text-[23px] text-white" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Services */}
            <div className="col-span-2">
              <h4 className="text-[20px] font-semibold text-white leading-[138%] mb-[30px] ">
                Services
              </h4> 
              <ul className="space-y-3">
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white font-normal hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    3D Animation
                  </Link>
                </li> 
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    3D Modeling
                  </Link>
                </li>
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white font-normal hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    3D Rendering
                  </Link>
                </li>
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white font-normal hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    Visualization
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Company */}
            <div className="col-span-2">
              <h4 className="text-[20px] font-semibold text-white leading-[138%] mb-[30px] ">
                Company
              </h4> 
              <ul className="space-y-3">
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white font-normal hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    About Us
                  </Link>
                </li> 
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white font-normal hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    Our Work
                  </Link>
                </li>
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white font-normal hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    Blog
                  </Link>
                </li>
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white font-normal hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Resources */}
            <div className="col-span-2">
              <h4 className="text-[20px] font-semibold text-white leading-[138%] mb-[30px] ">
                Resources
              </h4> 
              <ul className="space-y-3">
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white font-normal hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    How it works
                  </Link>
                </li> 
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white font-normal hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white font-normal hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    Case Studies
                  </Link>
                </li>
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white font-normal hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-none leading-[138%]">
                  <Link
                    className="text-white font-normal hover:text-[var(--primary-color)] text-[18px]"
                    href="#"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
 
        {/* Copyright */}
        <div className="mt-[160px] border-t border-[#8b8b8b]/40 py-[18px]">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center gap-4">
              <h5 className="flex text-white font-extralight items-center text-[20px] mb-0">
                <FaRegCopyright /> &nbsp; 2024ABCreative. All right reserved.
              </h5> 
            </div>
          </div>
        </div>
    </section> 
  );
}
 