import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaCube, FaCog, FaRegComments } from "react-icons/fa";
import { Link } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import TrustedCompanies from "./TrustedCompanies";


export default function Visualization() {
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
                        Visualization
                    </h1>
                    <p className="text-white max-w-2xl pb-5 text-[18px]">Add credibility to your internal team conversations and external investor presentations with high-quality 3D visualizations for all B2B developments.</p>

                    <div className="flex items-center justify-center gap-2 text-white text-[16px] font-medium">
                        <Link href="/" className="text-white">Home</Link>
                        <IoIosArrowForward size={16} />
                        <span className="text-[var(--primary-color)]">
                            Visualization
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
                                <h6 className="uppercase font-medium text-[18px] leading-[100%] text-[var(--primary-color)] w-max relative after:content-[''] after:absolute after:w-[30px] after:h-[2px] after:bg-[var(--primary-color)] after:right-[-40px] after:top-[8px] mb-3">Visualization</h6>
                            </div>
                            <h3 className="font-semibold lg:text-[40px] text-[23px] lg:leading-[100%] leading-[30px] text-[var(--text-color1)] mb-5"> What is 3D visualization? </h3> 

                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-10 gap-y-5 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                <p>
                                    3D visualizations are computer-generated images that create the illusion of three-dimensional space. AT ABCreative, we make our 3D visuals using specialized{" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        3D modeling
                                    </Link>{" "}
                                    software such as Blender and Lumion. Both are successful Dutch software products used by creative 3D artists worldwide. The actual 3D visualized images can be{" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        3D rendered
                                    </Link>{" "}
                                    in real-time or on our in-house render farm, which we use to render{" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        3D animation.
                                    </Link>{" "}
                                </p> 
                            </div>

                            {/* case studies */}
                            <div className="mt-16">
                                <h3 className="font-semibold lg:text-[40px] text-[23px] lg:leading-[100%] leading-[30px] text-[var(--text-color1)] mb-5"> Other case studies: </h3>  

                                <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                                    <Link href="#" className="group flex items-center gap-3 text-[var(--primary-color)]">
                                        <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] group-hover:scale-150 transition"></span>
                                        Crane positioning for BTG Positioning Systems.
                                    </Link>

                                    <Link href="#" className="group flex items-center gap-3 text-[var(--primary-color)]">
                                        <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] group-hover:scale-150 transition"></span>
                                        3D visualization for North Sea Port (previously Zeeland Seaports).
                                    </Link>

                                    <Link href="#" className="group flex items-center gap-3 text-[var(--primary-color)]">
                                        <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] group-hover:scale-150 transition"></span>
                                        RTG crane for Siemens.
                                    </Link>
                                </div>
                            </div> 

                            <div className="mt-[50px]">
                                <div className="">
                                    <img
                                        src="/assets/img/visu-img1.jpg"
                                        alt="image"
                                        className="w-full h-auto mb-[30px] rounded-xl"
                                    />
                                </div>
                                <h3 className="font-semibold lg:text-[40px] text-[23px] lg:leading-[100%] leading-[30px] text-[var(--text-color1)] mb-5"> Purpose of 3D visualization </h3>  
                                <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">In general, 3D visualization has a variety of applications. ABCreative’s clients ask us to produce 3D visuals to give a realistic representation of an object, space, or concept to aid communication, planning, and design. End uses include {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        3D renders,
                                    </Link>{" "}
                                product design, 3D animation, “How-stuff-works,” design visuals, advertising, product demonstrations, and video game development. 3D design visualization makes the understanding of any project visual and accessible and can help to identify potential issues before implementation on site. Additionally, 3D visuals are visually helpful in all sorts of educational and training materials for print or the web.</p>

                                <div className="mt-5"></div>
                                <h5 className="font-semibold text-[25px] leading-[100%] text-[var(--text-color1)] mb-4">Other types of project:</h5>
                                <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">Do you want to see how our{" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        3D design
                                    </Link>{" "} 
                                    service can get your idea off the ground?
                                </p>
                                <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">Do you want to see how{" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        3D visualization
                                    </Link>{" "} 
                                    can fill your marketing strategy’s missing link?
                                </p>
                                <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">How can high-quality{" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        3D video
                                    </Link>{" "} 
                                    be used for marketing and advertising purposes?
                                </p>
                            </div>

                            <div className="mt-[50px]">
                                <div className="">
                                    <img
                                        src="/assets/img/visu-img2.jpg"
                                        alt="image"
                                        className="w-full h-auto mb-[30px] rounded-xl"
                                    />
                                </div>
                                <h3 className="font-semibold lg:text-[40px] text-[23px] lg:leading-[100%] leading-[30px] text-[var(--text-color1)] mb-5"> Benefits of 3D Visualization </h3>  
                                <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        3D visualization
                                    </Link>{" "}
                                    provides a realistic and accurate representation of a product, design, or concept, making it easier for clients and stakeholders to understand design implications. It also enables communication of complex design ideas, making it easier for team members and clients to collaborate on a project. {" "}
                                    <Link href="#" className="text-[var(--primary-color)] underline">
                                        3D renders,
                                    </Link>{" "}
                                    also create compelling marketing materials and product demonstrations, which can help to increase sales boosting customer engagement. 3D visuals are more cost-effective than building physical prototypes or mock-ups, especially for large or complex projects. 3D visuals reveal ergonomic implications within a design and help to identify potential issues improving the overall safety and functionality of a project. Visuals can be shared and viewed by different parties involved, improving collaboration and decision-making processes.
                                </p> 

                                <div className="">
                                    <img
                                        src="/assets/img/visu-img3.jpg"
                                        alt="image"
                                        className="w-full h-auto mt-5 mb-[30px] rounded-xl"
                                    />
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

 


                {/* Workflow Section */}
                <section className="container pb-[80px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

                        <div className="lg:col-span-4"> 
                            <h3 className="font-semibold lg:text-[40px] text-[23px] lg:leading-[100%] leading-[30px] mb-5 text-[var(--text-color1)]"> Workflow </h3>

                            <div className="hidden lg:block mt-8 w-24 h-1 bg-[#35b3c3]"></div>
                        </div>

                        <div className="lg:col-span-8"> 
                            <div className="relative mt-10 pl-8 border-l-2 border-[#b9dce1]">
                                <div className="space-y-6 text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">

                                    <div className="relative">
                                        <span className="absolute -left-[43px] top-2 w-5 h-5 rounded-full bg-[#35b3c3] border-4 border-[#f6f9fa]"></span>
                                        <p>
                                            <span className="font-bold text-[#172031]">
                                                You share your project purpose,
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
                                        <p>We deliver final versions.</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px] mt-10">
                                We at the ABCreative animation company have a sixth sense
                                when something is missing in a complex image. We’re hands-on,
                                co-creating memorable 3D animations with you. Our nonsense
                                approach gets the job done on time and within budget. That’s
                                why our B2B clients return again and again.
                            </p>
                        </div>
                    </div>
                </section>


                {/* Deliverables */}
                <div className="container mb-[60px]">
                    <div className="grid grid-cols-12 lg:gap-10 gap-4">
                        <div className="col-span-12 lg:col-span-5">
                            <img
                                src="/assets/img/visu-img4.webp"
                                alt="Visualization"
                                className="w-full h-full rounded-xl object-cover"
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                            <div className="">
                                <h3 className="font-semibold lg:text-[40px] text-[23px] lg:leading-[100%] leading-[30px] text-[var(--text-color1)] mb-5"> Deliverables </h3>  

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            3D visualization
                                        </Link>{" "}
                                        in any format.
                                    </p>
                                    <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            3D animation
                                        </Link>{" "}
                                        for online or boardroom use.
                                    </p>
                                    <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            3D renders
                                        </Link>{" "}
                                        at the size you require.
                                    </p>
                                    <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        <Link href="#" className="text-[var(--primary-color)] underline">
                                            3D models
                                        </Link>{" "}
                                        if agreed upon in advance as part of the project.
                                    </p>
                                    <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        Preview and final versions by email, wetransfer, or Vimeo.
                                    </p>
                                    <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        Screenshots to show progress anytime.
                                    </p>
                                    <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        Series of renders from multiple viewpoints.
                                    </p>
                                    <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        Simple, photorealistic, or stylized renders of all sizes.
                                    </p>
                                    <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        Birds-eye fly-over or photorealistic walk-through.
                                    </p>
                                    <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        Audiovisual 3D animated productions in H264, 1080p, or 1440p.
                                    </p>
                                    <p className="text-[16px] text-[var(--text-color1)] font-normal leading-[25px]">
                                        Optional subtitles, professional voice-over, and background music.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Animation Services */}
                <section className="bg-[#eef7f8] py-14">
                    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
                            <h3 className="font-semibold lg:text-[40px] text-[23px] lg:leading-[100%] leading-[30px] mb-5 text-[var(--text-color1)]">Your Visualization May Need </h3>
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
                                <Link href="/modeling">
                                    <img
                                        src="/assets/img/Modeling.jpg"
                                        alt="Modeling"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#102536] via-[#102536]/30 to-transparent"></div>

                                    <div className="relative z-10 h-full min-h-[360px] flex flex-col justify-end p-7 text-white">  
                                        <h3 className="font-semibold text-[30px] mb-3">
                                            Modeling
                                        </h3> 
                                        <p className="text-sm leading-7 text-white/80 font-normal">
                                            Have our 3D modeling service make an accurate digital representation of your project.
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
                        </div>
                    </div>
                </section>


                {/* Trusted Companies */}
                <TrustedCompanies />
                {/* // Trusted Companies */}
            </main>
            {/* // Page end here */}
        </>
    );
}