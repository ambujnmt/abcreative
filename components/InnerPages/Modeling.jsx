import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaCube, FaCog, FaRegComments } from "react-icons/fa";
import { Link } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Modeling() {
    return (
        <>
            {/* Breadcrumb section - Original */}
            <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
                <img
                    src="/assets/img/breadcrumb-img.png"
                    alt="Company Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center pt-[30px]">
                    <h1 className="text-4xl font-bold text-white mb-3">
                        Modeling
                    </h1>
                    <p className="text-white max-w-2xl pb-5 text-[18px]">Use our business-to-business 3D modeling service to achieve an accurate visual model of your project.</p>

                    <div className="flex items-center justify-center gap-2 text-white text-[16px] font-medium">
                        <Link href="/" className="text-white">Home</Link>
                        <IoIosArrowForward size={16} />
                        <span className="text-[var(--primary-color)]">
                            Modeling
                        </span>
                    </div>
                </div>
            </div>
            {/* // Breadcrumb section */}


            {/* Page start here */}
            <main className="bg-[#f6f9fa] text-[#172031]">

                {/* Intro Section */}
                <section className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

                        {/* Left Content */}
                        <div className="lg:col-span-8"> 
                            <div className="flex items-center gap-4">
                                <h6 className="uppercase font-medium text-[18px] leading-[100%] text-[var(--primary-color)] w-max relative after:content-[''] after:absolute after:w-[30px] after:h-[2px] after:bg-[var(--primary-color)] after:right-[-40px] after:top-[8px] mb-3">Modeling</h6>
                            </div>
                            <h3 className="font-semibold text-[40px] leading-[100%] text-[var(--text-color1)] mb-5"> Modeling in Our Projects </h3> 

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                <p>
                                    Do you want to see how our{" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        3D design
                                    </Link>{" "}
                                    service can get your idea off the ground?
                                </p>

                                <p>
                                    Do you need to convert{" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        2D CAD into 3D
                                    </Link>{" "}
                                    models for animation or visuals?
                                </p>

                                <p>
                                    Do you require a{" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        3D infographic design
                                    </Link>{" "}
                                    as part of a marketing mix?
                                </p>

                                <p>
                                    See how our{" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        snowpark visualization
                                    </Link>{" "}
                                    entices financiers and promotes interest in indoor leisure projects.
                                </p>

                                <p>
                                    Let our{" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        themed environment design
                                    </Link>{" "}
                                    service visualize your craziest dreams!
                                </p>

                                <p>
                                    Why not have 3D{" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        product visualization 
                                    </Link>{" "}
                                    made to give quality 3D marketing visuals?
                                </p> 
                            </div>

                            {/* Recent Clients */}
                            <div className="mt-16">
                                <h3 className="font-semibold text-[40px] leading-[100%] text-[var(--text-color1)] mb-5"> Recent clients </h3>  

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <Link href="#" className="group flex items-center gap-3 text-[var(--primary-color)]">
                                        <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] group-hover:scale-150 transition"></span>
                                        RTG crane for Siemens.
                                    </Link>

                                    <Link href="#" className="group flex items-center gap-3 text-[var(--primary-color)]">
                                        <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] group-hover:scale-150 transition"></span>
                                        Kaifeng Snow Dome for Unlimited Snow BV.
                                    </Link>

                                    <Link href="#" className="group flex items-center gap-3 text-[var(--primary-color)]">
                                        <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] group-hover:scale-150 transition"></span>
                                        3D visualization for Esra.
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Floating Contact Card */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-8">
                                <div className="relative overflow-hidden rounded-[28px] bg-[#142536] p-8 sm:p-10 text-white shadow-[0_25px_60px_rgba(20,37,54,0.2)]">
                                    <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border-[25px] border-[#35b3c3]/20"></div>
                                    <div className="absolute -left-20 -bottom-20 w-56 h-56 rounded-full border-[30px] border-white/5"></div>

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#35b3c3] mb-8">
                                            <FaCube className="text-2xl" />
                                        </div>

                                        <h3 className="text-2xl font-bold leading-tight mb-5">
                                            Let’s talk about 3D design
                                        </h3>

                                        <p className="text-white/70 font-normal leading-[25px] text-[16px]">
                                            We are unique in that this is what we can help you
                                            with your project!
                                        </p>

                                        <div className="mt-8 h-px bg-white/15"></div>

                                        <div className="mt-6 flex items-center justify-between">
                                            <span className="text-sm text-white/60">
                                                Modeling project
                                            </span>

                                            <IoIosArrowForward className="text-[#35b3c3]" size={22} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Why Animation Section */}
                <section className="relative bg-[url('/assets/img/bg1.jpg')] bg-cover bg-center bg-fixed text-white">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/80"></div>

                    {/* Content */}
                    <div className="container py-16 lg:py-24 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

                            <div className="lg:col-span-4">
                                <span className="text-[var(--primary-color)] text-sm font-bold uppercase tracking-[0.2em]">
                                    01
                                </span>

                                <h3 className="font-semibold text-[40px] leading-[100%] mb-5">
                                    Why Modeling?
                                </h3>
                            </div>

                            <div className="lg:col-span-8">
                                <p className="text-white/90 text-[16px] font-normal leading-[25px]">
                                    If you let ABCreative assist in your project development with our 3D modeling service, we will transform your 2D design concepts into realistic 3D production models ready for 3D design visualization and 3D animation. From these models, we will make you photorealistic 3D visualization even while your project team is still in the project development phase. Our 3D models will be as detailed as they need to be, full-size scale, and made according to the reference material you supply.
                                </p>

                                <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90 text-[16px] font-normal leading-[25px]">
                                    <li className="flex gap-3">
                                        <span className="text-[var(--primary-color)]">✓</span>
                                        See what the object is about from all sides
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[var(--primary-color)]">✓</span>
                                        Gain a more precise understanding or perspective.
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[var(--primary-color)]">✓</span>
                                        Play around with different ideas.
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[var(--primary-color)]">✓</span>
                                        Accelerate the process of product design development.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>


                {/* Workflow Section */}
                <section className="container py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

                        <div className="lg:col-span-4">
                            <span className="text-[#35aeba] text-sm font-bold uppercase tracking-[0.2em]">
                                02
                            </span>
                            <h3 className="font-semibold text-[40px] leading-[100%] mb-5 text-[var(--text-color1)]"> Workflow </h3>

                            <div className="hidden lg:block mt-8 w-24 h-1 bg-[#35b3c3]"></div>
                        </div>

                        <div className="lg:col-span-8">
                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                Huge environmental scenes or microscopic particles can all be modeled in 3D by a similar step-by-step process. Another example would be industrial machines, which are notoriously complex and challenging to explain. Often the client has a 3D design model from the design and manufacturing process, which we can use to create a photorealistic model leading to 3D renders.
                            </p>

                            <div className="relative mt-10 pl-8 border-l-2 border-[#b9dce1]">
                                <div className="space-y-6 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>
                                            <span className="font-bold text-[#172031]">
                                                Youshare your project purpose,
                                            </span>{" "}
                                            expectations & deadlines.
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>Both you and we get our questions answered.</p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>We give a price indication.</p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>For long projects, we ask for payment in stages.</p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>On the price agreement, you provide us with project data.</p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>
                                            <span className="font-bold text-[#172031]">
                                                We start work
                                            </span>{" "}
                                            following the best workflow for the project.
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>
                                            <span className="font-bold text-[#172031]">
                                                We provide regular updates
                                            </span>{" "}
                                            using email, calls, or meetings.
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>We provide preview visuals via email or Vimeo for animation.</p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>Your comments lead to changes professionally handled.</p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>Several preview phases pass before handing over a final product.</p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>Post-production with voice-over and subtitles, are options.</p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>
                                            <span className="font-bold text-[#172031]">
                                                We deliver final versions.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>


                {/* Animation Services */}
                <section className="bg-[#eef7f8] py-14">
                    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
                            <h3 className="font-semibold text-[40px] leading-[100%] mb-5 text-[var(--text-color1)]"> Your Modeling May Need </h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                            <div className="group relative min-h-[360px] rounded-[28px] overflow-hidden bg-[#102536]">
                                <Link href="/animation">
                                    <img
                                        src="/assets/img/Animation.jpg"
                                        alt="Animation"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#102536] via-[#102536]/30 to-transparent"></div>

                                    <div className="relative z-10 h-full min-h-[360px] flex flex-col justify-end p-7 text-white"> 
                                        <h3 className="font-semibold text-[30px] mb-3">
                                            Animation
                                        </h3> 
                                        <p className="text-sm leading-7 text-white/80 font-normal">
                                            Animation Showcase your latest development, product, or services with our 3D animation service.
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            <div className="group relative min-h-[360px] rounded-[28px] overflow-hidden bg-[#102536]">
                                <Link href="/rendering">
                                    <img
                                        src="/assets/img/Rendering.jpg"
                                        alt="Rendering"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#102536] via-[#102536]/30 to-transparent"></div>

                                    <div className="relative z-10 h-full min-h-[360px] flex flex-col justify-end p-7 text-white"> 
                                        <h3 className="font-semibold text-[30px] mb-3">
                                            Rendering
                                        </h3> 
                                        <p className="text-sm leading-7 text-white/80 font-normal">
                                            3D images produced by our 3D rendering service help you
                                            market your ideas with style.
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            <div className="group relative min-h-[360px] rounded-[28px] overflow-hidden bg-[#102536]">
                                <Link href="/visualization">
                                    <img
                                        src="/assets/img/Visualization.jpg"
                                        alt="Visualization"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#102536] via-[#102536]/30 to-transparent"></div>

                                    <div className="relative z-10 h-full min-h-[360px] flex flex-col justify-end p-7 text-white">  
                                        <h3 className="font-semibold text-[30px] mb-3">
                                            Visualization
                                        </h3> 
                                        <p className="text-sm leading-7 text-white/80 font-normal">
                                            3D visualizations are computer-generated images that create
                                            the illusion of three-dimensional space.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Trusted Companies */}
                <section className="bg-white">
                    <div className="container"> 
                        <div className="grid grid-cols-12 lg:gap-8 gap-4 items-center">
                            <div className="lg:col-span-6 col-span-12">
                                <h3 className="font-semibold text-[40px] leading-[100%] mb-5 text-[var(--text-color1)]"> ABCreative services trusted by teams at companies including... </h3>
                                <button className="mt-[25px] flex items-center bg-[var(--primary-color)] hover:bg-black text-white px-7 py-4 rounded-lg transition border border-[var(--primary-color)] text-[20px] font-medium leading-[100%]">See Cases &nbsp; <FaArrowRightLong /></button>
                            </div>
                            <div className="lg:col-span-6 col-span-12 bg-[url('/assets/img/pattern-img.png')] bg-cover bg-center px-10 py-[50px]">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo1.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo2.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo3.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo4.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo5.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo6.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo7.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo8.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo9.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                    <div className="col-span-6 lg:col-span-4">
                                        <img
                                            src="/assets/img/com-logo10.png"
                                            alt="image"
                                            className="w-full h-auto shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
            </main>
            {/* // Page end here */}
        </>
    );
}