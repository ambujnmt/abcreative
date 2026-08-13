"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaCube, FaUsers, FaAward, FaFilm, FaDraftingCompass, FaShip, FaSolarPanel, FaWarehouse, FaChartLine, FaCheckCircle, FaHeadset, FaArrowRight, FaBolt, FaClipboardList, FaCommentDots, FaBoxOpen, FaVideo, FaHandshake, FaRocket, FaClock, FaFileInvoiceDollar, FaSyncAlt, FaTruck, FaChevronDown } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaTableTennis } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "@heroui/react";


export default function Company() {
    const [openFaq, setOpenFaq] = useState(1);


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
                    <h1 className="text-4xl font-bold text-white mb-3">Company</h1>
                    <div className="flex items-center justify-center gap-2 text-white text-[16px] font-medium">
                        <span>Home</span>
                        <IoIosArrowForward size={16} />
                        <span className="text-[var(--primary-color)]">Company</span>
                    </div>
                </div>
            </div>
            {/* // Breadcrumb section */}


            {/* Page start here */}
            <main className="w-full bg-white text-slate-800">
                {/* Section 1 */}
                <section className="bg-[#FBFCFD] py-[70px]">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-6">
                                <h6 className="uppercase font-medium text-[18px] leading-[100%] text-[var(--primary-color)] w-max relative after:content-[''] after:absolute after:w-[30px] after:h-[2px] after:bg-[var(--primary-color)] after:right-[-40px] after:top-[8px] mb-5">3D Visualization Studio</h6>
                                <h3 className="font-semibold text-[55px] leading-[100%] text-[var(--text-color1)] mb-5">About <span className="text-[var(--primary-color)]"> ABCreative </span></h3>
                                <p className="text-[20px] text-[var(--text-color2)] font-normal leading-[25px]">We supply business clients with 3D content they use for marketing and project development.</p>

                                <div className="mt-[30px] flex justify-between bg-[#F1F8FA] py-[15px] px-[12px] rounded-xl shadow-[0px_5px_10px_rgba(0,0,0,0.15)]">
                                    <div className="flex items-center"> 
                                        <div className="">
                                            <h5 className="text-[18px] font-semibold text-[var(--text-color1)] leading-[25px]">15+</h5>
                                            <p className="text-[16px] font-normal text-[var(--text-color2)]">Years Experience</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center"> 
                                        <div className="">
                                            <h5 className="text-[18px] font-semibold text-[var(--text-color1)] leading-[25px]">120+</h5>
                                            <p className="text-[16px] font-normal text-[var(--text-color2)]">Projects Delivered</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="">
                                            <h5 className="text-[18px] font-semibold text-[var(--text-color1)] leading-[25px]">40+ </h5>
                                            <p className="text-[16px] font-normal text-[var(--text-color2)]">Industries Served</p>
                                        </div>
                                    </div>
                                </div>
  
                                <button className="mt-[40px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] text-[20px] font-medium leading-[100%]">Request a Free Consult &nbsp; <FaArrowRightLong /></button>
                            </div>
                            <div className="col-span-6">
                                <div className="relative">
                                    <img
                                        src="/assets/img/about-img.jpg"
                                        alt="image"
                                        className="rounded-xl w-full h-auto"
                                    />
                                    <div className="w-[60%] shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-xl border-l-3 border-l-[var(--primary-color)] p-5 absolute bottom-[-80px] left-[40px] bg-white">
                                        <FaAward className="h-6 w-6 flex-none text-[var(--primary-color)] mb-2" />
                                        <p className="text-[18px] italic text-[var(--text-color2)] font-medium leading-[25px]">Trusted B2B Partner</p>
                                        <p className="text-[16px] text-[var(--text-color2)] font-normal leading-[25px]">Across Holland & worldwide
</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </section>
                {/* // Section 1 */}

 
                {/* Section 2 */}
                <section className="py-20">
                    <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
                        <div>
                            <h3 className="font-semibold text-[40px] leading-[100%] text-[var(--text-color1)] mb-5">
                                You need 3D marketing material?
                            </h3>
                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                ABCreative is your B2B 3D content supplier for various project types and industries. Our job is to transform your design ideas into attractive, dynamic media. With +20 years of experience in 3D design visualization, we specialize in {" "}
                                <Link href="/animation" className="text-[var(--primary-color)] underline">
                                    3D animation
                                </Link>,{" "}
                                <Link href="/modeling" className="text-[var(--primary-color)] underline">
                                    modeling
                                </Link>,{" "} and {" "}
                                <Link href="/rendering" className="text-[var(--primary-color)] underline">
                                    rendering
                                </Link>,{" "} we love to make high-quality, picture-perfect visualization for our B2B clients in Holland and worldwide. We also love table football, so why not pop in for a coffee and some competitive but relaxing table football fun?
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full bg-indigo-50 px-4 py-1.5 text-[16px] font-normal text-[var(--primary-color)]">
                                    3D Animation
                                </span>
                                <span className="rounded-full bg-indigo-50 px-4 py-1.5 text-[16px] font-normal text-[var(--primary-color)]">
                                    3D Modeling
                                </span>
                                <span className="rounded-full bg-indigo-50 px-4 py-1.5 text-[16px] font-normal text-[var(--primary-color)]">
                                    3D Rendering
                                </span>
                                <span className="rounded-full bg-indigo-50 px-4 py-1.5 text-[16px] font-normal text-[var(--primary-color)]">
                                    Product Visualization
                                </span>
                            </div>
                        </div>
            
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50">
                                <span className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaFilm className="h-5 w-5" />
                                </span>
                                <div>
                                    <h3 className="text-[17px] font-bold text-slate-900">
                                        3D Animation
                                    </h3>
                                    <p className="mt-1 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        Motion-driven storytelling that explains how your product works.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50">
                                <span className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaDraftingCompass className="h-5 w-5" />
                                </span>
                                <div>
                                    <h3 className="text-[17px] font-bold text-slate-900">
                                        3D Modeling
                                    </h3>
                                    <p className="mt-1 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        Precise, production-ready models built from CAD or concept.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50">
                                <span className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaVideo className="h-5 w-5" />
                                </span>
                                <div>
                                    <h3 className="text-[17px] font-bold text-slate-900">
                                        3D Rendering
                                    </h3>
                                    <p className="mt-1 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        Photo-realistic stills at any resolution, ready for print or web.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* // Section 2 */}
            

                {/* Section 3 */}
                <section className="bg-slate-50">
                    <div className="container text-center">
                        <h3 className="font-semibold text-[40px] leading-[100%] text-[var(--text-color1)] mb-5">ABCreative is the ideal 3D Partner</h3>
                        <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                            A small, senior team that treats every project like it's our own.
                        </p>
                
                        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
                            <div className="rounded-2xl bg-white p-6 shadow-md sm:translate-y-0">
                                <img
                                    src="/assets/img/partner1.jpg"
                                    alt="image"
                                    className="mx-auto h-[250px] w-[250px] rounded-full object-cover"
                                />
                                <h3 className="mt-5 text-[17px] mb-1 font-bold text-[var(--primary-color)]">
                                    Andrew Brady
                                </h3>
                                <p className="text-[14px] font-semibold text-[var(--text-color1)]">
                                    Owner and 3D Animator
                                </p>
                                <div className="flex justify-center mt-[15px]">
                                    <Link href="#" className="bg-[var(--primary-color)] text-white w-[30px] h-[30px] rounded-full text-[28px] mx-[4px] p-[10px]">
                                        <FaFacebookF className="text-[18px]" />
                                    </Link>
                                    <Link href="#" className="bg-[var(--primary-color)] text-white w-[30px] h-[30px] rounded-full text-[28px] mx-[4px] p-[10px]">
                                        <FaInstagram className="text-[18px]" />
                                    </Link>
                                    <Link href="#" className="bg-[var(--primary-color)] text-white w-[30px] h-[30px] rounded-full text-[28px] mx-[4px] p-[10px]">
                                        <FaLinkedinIn className="text-[18px]" />
                                    </Link>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-white p-6 shadow-md sm:-translate-y-6">
                                <img
                                    src="/assets/img/partner2.jpg"
                                    alt="image"
                                    className="mx-auto h-[250px] w-[250px] rounded-full object-cover"
                                />
                                <h3 className="mt-5 text-[17px] font-bold text-[var(--primary-color)]">
                                    Chris Japenga
                                </h3>
                                <p className="text-[14px] font-semibold text-[var(--text-color1)]">
                                    Senior 3D Animator
                                </p>
                                <div className="flex justify-center mt-[15px]">
                                    <Link href="#" className="bg-[var(--primary-color)] text-white w-[30px] h-[30px] rounded-full text-[28px] mx-[4px] p-[10px]">
                                        <FaFacebookF className="text-[18px]" />
                                    </Link>
                                    <Link href="#" className="bg-[var(--primary-color)] text-white w-[30px] h-[30px] rounded-full text-[28px] mx-[4px] p-[10px]">
                                        <FaInstagram className="text-[18px]" />
                                    </Link>
                                    <Link href="#" className="bg-[var(--primary-color)] text-white w-[30px] h-[30px] rounded-full text-[28px] mx-[4px] p-[10px]">
                                        <FaLinkedinIn className="text-[18px]" />
                                    </Link>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-white p-6 shadow-md sm:translate-y-0">
                                <img
                                    src="/assets/img/partner3.jpg"
                                    alt="image"
                                    className="mx-auto h-[250px] w-[250px] rounded-full object-cover"
                                />
                                <h3 className="mt-5 text-[17px] font-bold text-[var(--primary-color)]">
                                    JJ Brady
                                </h3>
                                <p className="text-[14px] font-semibold text-[var(--text-color1)]">
                                    Junior 3D Animator
                                </p>
                                <div className="flex justify-center mt-[15px]">
                                    <Link href="#" className="bg-[var(--primary-color)] text-white w-[30px] h-[30px] rounded-full text-[28px] mx-[4px] p-[10px]">
                                        <FaFacebookF className="text-[18px]" />
                                    </Link>
                                    <Link href="#" className="bg-[var(--primary-color)] text-white w-[30px] h-[30px] rounded-full text-[28px] mx-[4px] p-[10px]">
                                        <FaInstagram className="text-[18px]" />
                                    </Link>
                                    <Link href="#" className="bg-[var(--primary-color)] text-white w-[30px] h-[30px] rounded-full text-[28px] mx-[4px] p-[10px]">
                                        <FaLinkedinIn className="text-[18px]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* // Section 3 */}


                {/* section 4 */}
                <section className="py-20">
                    <div className="container grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div className="rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50">
                            <span className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white mb-5">
                                <FaCube className="h-5 w-5" />
                            </span>
                            <h3 className="text-[17px] font-bold text-slate-900 mb-3">
                                We love everything 3D!
                            </h3>
                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                Andrew Brady has a 3D design background. After a professional career break, he specialized in hand-drawn retail visualization, serving several design firms in London on short-term contracts. With the increased digital possibilities, the time was right to get into digital 3D, thus joining the digital age and embarking on the current journey with ABCreative. We take pleasure in its work and in the interactions we have with our clients. We utilize the most up-to-date methods. Furthermore, we have a strong desire to maintain our education, as well as our professional experience and the abilities associated with it. Our goal is always to provide our clients with the highest level of service.
                            </p>
                        </div>
            
                        <div className="rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50">
                            <span className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white mb-5">
                                <FaHandshake className="h-5 w-5" />
                            </span>
                            <h3 className="text-[17px] font-bold text-slate-900 mb-3">
                                What to expect from us
                            </h3>
                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                All projects start with a personal briefing to discuss expectations from both sides of this collaboration. Main discussion topics include the project, your preferred deadlines, and your budget. For long projects, we request payment in stages. With the client’s approval, we start work when all is clear.
                                <br />
                                We lead you through various stages, including sketch design, storyboarding, 3D modeling, and animation & preview rendering as we do in all client projects.As required, we update work progress through briefings, preview visuals & animation, calls, emails & meetings. Several preview phases pass before handing over a final product. Although there are many ways to approach 3D projects, our preferred workflow and software choices of are optimized to suit most assignments. We aim to produce results, previews, and final-renders efficiently and cost-effectively.
                            </p>
                        </div>
                    </div>
                </section>
                {/* // section 4 */}
  
            
                {/* section 5 */}
                <section className="">
                    <div className="container">
                        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                            <h3 class="font-semibold text-[40px] leading-[100%] text-[var(--text-color1)] mb-5">Some project cases</h3>
                            <p className="max-w-sm text-[20px] text-[var(--text-color2)] font-normal leading-[25px]">
                                A snapshot of the industries and clients we&apos;ve brought into 3D.
                            </p>
                        </div>
            
                        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaShip className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    Explaining <span className="font-semibold"> crane positioning</span> transponder technology for {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        BTG Positioning Systems.
                                    </Link>
                                </p>
                            </div>
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaShip className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    Marketing and concept 3D visualizations for {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        North Sea Port (previously Zeeland Seaports).
                                    </Link>
                                </p>
                            </div>
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaDraftingCompass className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    3D modeling an <span className="font-semibold"> RTG crane</span> for use in the Unity virtual environment for {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        Siemens.
                                    </Link>
                                </p>
                            </div>
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaCube className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    3D visuals for {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        Vitrotem.
                                    </Link>{" "} highlight their <span className="font-semibold"> tiny research environment</span> of just 3 mm across.
                                </p>
                            </div>
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaBolt className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    3D animation explains how the {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        Blue Heart 
                                    </Link>{" "} heat pump works.
                                </p>
                            </div>
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaFilm className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    3D animation explain the concept of the AP3 & platform on land and sea for {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        Ampyx Power.
                                    </Link>
                                </p>
                            </div>
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaWarehouse className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    3D walkthrough visualization explains Miko’s World to investors of {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        Unlimited Snow BV.
                                    </Link>
                                </p>
                            </div>
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaWarehouse className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    3D visualization of Railterminal Gelderland made for marketing purposes for {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        Provincie Gelderland.
                                    </Link>
                                </p>
                            </div>
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaSolarPanel className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    3D visualization & photomontage made for sun-panel placement for clients of {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        Delta3.
                                    </Link>
                                </p>
                            </div>
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaWarehouse className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    3D visualization of multiple warehouse racking systems made for {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        Esra.
                                    </Link>
                                </p>
                            </div>
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <HiMiniSquare3Stack3D className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    3D walkthrough design development for Kaifeng Snow Dome, China, for {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        Unlimited Snow BV.
                                    </Link>
                                </p>
                            </div>
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <SiGooglemarketingplatform className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    3D visualization of Amstelwijck and Tripkouw solarparks for marketing purposes for {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        HVC Group.
                                    </Link>
                                </p>
                            </div>
                            <div className="rounded-2xl border-l-4 border-[var(--primary-color)] bg-white p-5 shadow-sm">
                                <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                    <FaTableTennis className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    3D visualization concept Padel Tennis Club designed and visualized for {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        T3S BV.
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* // section 5 */}


                {/* section 6 */}
                <section className="py-20">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12">
                                <h3 className="font-semibold text-[40px] leading-[100%] text-[var(--text-color1)] mb-5">Some project types</h3>
                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div className="rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50 h-full">
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Do you want to see how our {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            3D design
                                        </Link>{" "} service can get your idea off the ground?
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Why not use our 3D animation bureau for your {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            “how-stuff-works”
                                        </Link>{" "} animation?
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Do you want to see how {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            3D visualization
                                        </Link>{" "} can fill your marketing strategy’s missing link?
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        How can high-quality {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            3D video
                                        </Link>{" "} be used for marketing and advertising purposes?
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] py-[8px]">
                                        How can {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            3D renderings
                                        </Link>{" "} help you to persuade your investors?
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div className="rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50 h-full">
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Do you want to see how {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            container port visualization 
                                        </Link>{" "} can supplement your tender applications?
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Do you want to see how {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            exterior 3D visualization
                                        </Link>{" "} can provide excellent marketing materials?
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Why not have ABCreative make your {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            ArchViz ‍
                                        </Link>{" "} for a fresh perspective?
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] py-[8px]">
                                        How can {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            infrastructure visualization
                                        </Link>{" "} provide quality marketing materials?
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div className="rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50 h-full">
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Our {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            product rendering
                                        </Link>{" "} service is ready to help you get photo-realistic animation and renders.
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Why not have 3D {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            product visualization 
                                        </Link>{" "} made to give quality 3D marketing visuals?
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        See how our 3D {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            stylized renders 
                                        </Link>{" "} can graphically simplify your concept.
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] py-[8px]">
                                        Do you need to convert {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            2D CAD into 3D
                                        </Link>{" "} models for animation or visuals?
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div className="rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50 h-full">
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Do you want to see how {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            container port animation
                                        </Link>{" "} helps you identify design opportunities?
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Why not have ABCreative make {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            big-scene visualization
                                        </Link>{" "} for your project development?
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Why not let us take your 3D animation one step further with {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            post-production?
                                        </Link>{" "}
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] py-[8px]">
                                        See how {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            audio-visual animation 
                                        </Link>{" "} combines subtitled 3D animation, video, and voiceover to tell your story.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div className="rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50 h-full">
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        See how our {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            snowpark visualization 
                                        </Link>{" "} entices financiers and promotes interest in indoor leisure projects.
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Let our {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            themed environment design
                                        </Link>{" "} service visualize your craziest dreams!
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        Want to see how our 3D {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            solar park visualization
                                        </Link>{" "} service works?
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] border-b border-b-black/10 py-[8px]">
                                        See how {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            warehouse visualization
                                        </Link>{" "} can convince your investors and stakeholders.
                                    </p>
                                    <p class="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] py-[8px]">
                                        Do you require a {" "}
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            3D infographic design
                                        </Link>{" "} as part of a marketing mix?
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-4 col-span-12">
                                <div className="h-full">
                                    <img
                                        src="https://cdna.artstation.com/p/assets/images/images/026/909/610/large/gourav-soni-untitled1.jpg?1590064512"
                                        alt="image"
                                        className="w-full h-auto rounded-lg object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* // section 6 */}

 
                {/* section 7 */}
                <section className="bg-[var(--dark-bg)] px-4 py-20">
                    <div className="container">
                        <div className="text-left">
                            <h2 className="font-semibold text-[40px] leading-[100%] text-white sm:text-4xl">
                                Project workflow
                            </h2>
                            <p className="mx-auto mt-4 text-[16px] text-slate-300 font-normal leading-[25px]">
                                The planning of projects is one of ABCreative’s strong suits, and we have developed streamlined processes to suit your project’s requirements, whatever they may be.
                            </p>
                            <p className="mx-auto text-[16px] text-slate-300 font-normal leading-[25px]">
                                As with all our clients, ABCreative will apply appropriate technology, adequate time, and effort to your project if you allow us.
                            </p>
                        </div>
                
                        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    You share your project purpose, expectations & deadlines.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    Both you and we get our questions answered.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    We give a price indication.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    For long projects, we ask for payment in stages.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    On the price agreement, you provide us with project data.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    We start work following the best workflow for the project.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    We provide regular updates using email, calls, or meetings.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    We provide preview visuals via email or Vimeo for animation.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    Your comments lead to changes professionally handled.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    Several preview phases pass before handing over a final product.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    Post-production with voice-over and subtitles, are options
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    We deliver final versions.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-6"> 
                                <p className="mt-2 text-[16px] text-slate-300 font-normal leading-[25px]">
                                    We aim to empower you to realize your vision.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
                {/* // section 7 */}

            
                {/* section 8 */}
                <section className="py-20">
                    <div className="container">
                        <h2 className="font-semibold text-[40px] leading-[100%] text-[var(--text-color1)] mb-5">
                            Project deliverables
                        </h2>
                        <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                            ABCreative helps you communicate your ideas powerfully and cost-effectively. We offer exclusive attention to detail. We have fast turnaround times at affordable rates. Let us make the 3D content you are looking for on budget and time.
                        </p>
                        <p className="text-[17px] text-[var(--text-color1)] font-normal leading-[25px]"><b>Let us make the 3D content you are looking for on budget and time.</b></p>
            
                        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
                            {/* Left: deliverable-type spec list */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50">
                                    <span className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                        <FaCube className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h3 className="text-[17px] font-bold text-slate-900">
                                            3D visualization
                                        </h3>
                                        <p className="mt-1 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                            of many types!
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50">
                                    <span className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                        <FaFilm className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h3 className="text-[17px] font-bold text-slate-900">
                                            3D animation
                                        </h3>
                                        <p className="mt-1 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                            in any digital format.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50">
                                    <span className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                        <FaVideo className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h3 className="text-[17px] font-bold text-slate-900">
                                            3D renders
                                        </h3>
                                        <p className="mt-1 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                            at the size you require..
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5 shadow-sm bg-indigo-50">
                                    <span className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-xl bg-[var(--primary-color)] text-white">
                                        <FaDraftingCompass className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h3 className="text-[17px] font-bold text-slate-900">
                                            3D models
                                        </h3>
                                        <p className="mt-1 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                            if agreed upon in advance as part of the project.
                                        </p>
                                    </div>
                                </div>
                            </div>
                
                            {/* Right: dark checklist card */}
                            <div className="rounded-3xl bg-[var(--dark-bg)] p-8">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                                    Included with every delivery
                                </h3>
                                <ul className="mt-6 space-y-4 text-sm text-slate-200">
                                    <li className="flex items-start gap-3">
                                        <FaCheckCircle className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-color)]" />
                                        Preview and final versions by email, wetransfer, or Vimeo.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheckCircle className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-color)]" />
                                        Screenshots to show progress anytime.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheckCircle className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-color)]" />
                                        Series of renders from multiple viewpoints.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheckCircle className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-color)]" />
                                        Simple, photorealistic, or stylized renders of all sizes.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheckCircle className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-color)]" />
                                        Birds-eye fly-over or photorealistic walk-through.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheckCircle className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-color)]" />
                                        Audiovisual 3D animated productions in H264, 1080p, or 1440p.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheckCircle className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-color)]" />
                                        Optional subtitles, professional voice-over, and background music.
                                    </li>
                                </ul>
                            </div>
                        </div> 
            
                        <p className="mt-10 max-w-2xl text-[17px] text-[var(--text-color1)] font-normal leading-[25px]">
                            ABCreative helps you communicate your ideas powerfully and cost-effectively. We offer exclusive attention to detail.
                        </p>
                        <p className="mt-5 max-w-2xl text-[17px] text-[var(--text-color1)] font-normal leading-[25px]">
                            With ABCreative, you are safe in our hands. Please don’t take our word for it. Please have a look at our customer testimonials.
                        </p>
                    </div>
                </section>
                {/* // section 8 */}

            
                {/* section 9 */}
                <section className="bg-slate-50">
                    <div className="container">
                        <div className="flex flex-col items-center"> 
                            <h2 className="mt-6 font-semibold text-[40px] leading-[100%] text-[var(--text-color1)] mb-10">
                                Here’s some answers to our most common questions
                            </h2>
                        </div>
            
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 lg:col-span-6">
                                <img
                                    src="https://render-vision.com/wp-content/uploads/2026/06/augmented-reality-architecture-design-review.webp"
                                    alt="image"
                                    className="w-full h-[600px] rounded-xl object-cover"
                                />
                            </div>
                            <div className="col-span-12 lg:col-span-6">
                                <div className=""> 
                                    {/* Q1 */}
                                    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaq(openFaq === 1 ? 0 : 1)}
                                            className="flex w-full items-center justify-between gap-3 p-6 text-left"
                                        >
                                            <span className="flex items-center gap-3">
                                            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--primary-color)] text-xs font-bold text-white">
                                                Q1
                                            </span>
                                            <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                                                What does abcreative do?
                                            </h3>
                                            </span>
                                            <FaChevronDown
                                            className={`h-3.5 w-3.5 flex-none text-[var(--primary-color)] transition-transform duration-300 ${
                                                openFaq === 1 ? "rotate-180" : ""
                                            }`}
                                            />
                                        </button>
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${
                                            openFaq === 1
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="flex flex-wrap gap-2 px-6 pb-6">
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        3D Modeling for multiple purposes
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        3D Animation
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        3D visualization
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        3D Rendering various styles and applications
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Big scene visualization
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Port visualization
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Confidential projects
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Product visualization
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Archviz
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Convert 2D CAD into 3D models
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        VR and VR assets
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        3D environment model
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Post-production voice-over, synchronized text, music
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        
                                    {/* Q2 */}
                                    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaq(openFaq === 2 ? 0 : 2)}
                                            className="flex w-full items-center justify-between gap-3 p-6 text-left"
                                        >
                                            <span className="flex items-center gap-3">
                                            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--primary-color)] text-xs font-bold text-white">
                                                Q2
                                            </span>
                                            <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                                                For what do clients come to abcreative?
                                            </h3>
                                            </span>
                                            <FaChevronDown
                                            className={`h-3.5 w-3.5 flex-none text-[var(--primary-color)] transition-transform duration-300 ${
                                                openFaq === 2 ? "rotate-180" : ""
                                            }`}
                                            />
                                        </button>
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${
                                            openFaq === 2
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="flex flex-wrap gap-2 px-6 pb-6">
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        3D modeling service leading to photorealistic images and animation
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        3D animated audio-visual movie clips as useful marketing tools
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        3D visualization of products and project operations
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        3D photo-realistic presentation materials needed for marketing
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Visualization services for projects, and products under development
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Projects large or small: 10km environment to a piece of jewelry
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Detailed technical 3D animation for confidential tender applications
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Conceptual ideas turned into 3D animated presentations
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        3D animation and visualization of themed snow and ice playgrounds
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Development of VR assets for a game engine with physical properties
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Development of 3D environments for walkthrough, fly-over, or training
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        
                                    {/* Q3 */}
                                    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaq(openFaq === 3 ? 0 : 3)}
                                            className="flex w-full items-center justify-between gap-3 p-6 text-left"
                                        >
                                            <span className="flex items-center gap-3">
                                            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--primary-color)] text-xs font-bold text-white">
                                                Q3
                                            </span>
                                            <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                                                what do you need to get started?
                                            </h3>
                                            </span>
                                            <FaChevronDown
                                            className={`h-3.5 w-3.5 flex-none text-[var(--primary-color)] transition-transform duration-300 ${
                                                openFaq === 3 ? "rotate-180" : ""
                                            }`}
                                            />
                                        </button>
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${
                                            openFaq === 3
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="flex flex-wrap gap-2 px-6 pb-6">
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Your purpose for using 3D services, goals, products
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        3D Animation: simple text doc what you want = storyboard
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Reference materials in any form, sketches or concept drawings
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Detailed 2D CAD information
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Complete or partly complete 3D models from any software package
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Actually, with more or less information, we can produce a presentation
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        
                                    {/* Q4 */}
                                    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaq(openFaq === 4 ? 0 : 4)}
                                            className="flex w-full items-center justify-between gap-3 p-6 text-left"
                                        >
                                            <span className="flex items-center gap-3">
                                            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--primary-color)] text-xs font-bold text-white">
                                                Q4
                                            </span>
                                            <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                                                How much time per project?
                                            </h3>
                                            </span>
                                            <FaChevronDown
                                            className={`h-3.5 w-3.5 flex-none text-[var(--primary-color)] transition-transform duration-300 ${
                                                openFaq === 4 ? "rotate-180" : ""
                                            }`}
                                            />
                                        </button>
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${
                                            openFaq === 4
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="flex flex-wrap gap-2 px-6 pb-6">
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Short projects may take just a few days to complete
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        2-3 mins of animation take approx 2-6 weeks
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Longer projects can take eight weeks or more
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Rendering takes place on the render farm
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        
                                    {/* Q5 */}
                                    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaq(openFaq === 5 ? 0 : 5)}
                                            className="flex w-full items-center justify-between gap-3 p-6 text-left"
                                        >
                                            <span className="flex items-center gap-3">
                                            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--primary-color)] text-xs font-bold text-white">
                                                Q5
                                            </span>
                                            <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                                                What's the next step?
                                            </h3>
                                            </span>
                                            <FaChevronDown
                                            className={`h-3.5 w-3.5 flex-none text-[var(--primary-color)] transition-transform duration-300 ${
                                                openFaq === 5 ? "rotate-180" : ""
                                            }`}
                                            />
                                        </button>
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${
                                            openFaq === 5
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="flex flex-wrap gap-2 px-6 pb-6">
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Contact us to discuss your project
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Best approach per project, deadline, budget
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        Written proposal and price quotation
                                                    </span>
                                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                                                        If agreed, we start!
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* // Section 9 */}
            
                {/* section 10 */}
                <section className="container pb-20 pt-4 mt-10">
                    <div className="rounded-3xl bg-[var(--primary-color)] py-14 text-center shadow-2xl">
                        <h2 className="mt-4 font-semibold text-[40px] leading-[100%] text-white sm:text-4xl">
                            With Renderix, you&apos;re safe in our hands
                        </h2>
                        <p className="mx-auto mt-3 max-w-xl text-[16px] text-white font-normal leading-[25px]">
                            Don&apos;t take our word for it — let&apos;s discuss your
                            project, timeline, and budget, no strings attached.
                        </p>
                        <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-100 sm:text-base hover:text-[var(--primary-color)]">
                            Request a Free Consult
                            <FaArrowRight className="h-3 w-3" />
                        </button>
                    </div>
                </section>
                {/* // section 10 */}
            </main>
            {/* // Page start here */}
        </>
    )
}
