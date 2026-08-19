import { Link } from "@heroui/react";
import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
 
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <header className="absolute top-0 z-[9999] w-full">
      <div className="">
        <div className="container mx-auto">
          <div className="flex items-center justify-between pt-2">
 
            {/* Logo */}
            <div className="flex items-center min-w-[185px]">
              <Link href="/">
                <img
                  src="/assets/img/logo.png"
                  alt="Logo"
                  className="h-auto lg:max-w-[300px] max-w-[195px]"
                />
              </Link>
            </div>
 
            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center">
              <nav>
                <ul className="flex items-center">
                  <li className="mx-[20px]">
                    <Link
                      href="/"
                      className="text-[20px] leading-[100%] font-medium hover:text-[var(--primary-color)] text-[#fff]"
                    >
                      Home
                    </Link>
                  </li>
 
                  <li className="mx-[20px] relative group">
                    <Link
                      href="/company"
                      className="text-[20px] leading-[100%] font-medium hover:text-[var(--primary-color)] text-[#fff]"
                    >
                      Company 
                    </Link>
                  </li>
 
                  <li className="mx-[20px]">
                    <Link
                      href="/whatWeDo"
                      className="text-[20px] leading-[100%] font-medium hover:text-[var(--primary-color)] text-[#fff]">
                      What we do
                    </Link>
                  </li>
 
                  <li className="mx-[20px]">
                    <Link
                      href="clients"
                      className="text-[20px] leading-[100%] font-medium hover:text-[var(--primary-color)] text-[#fff]">
                      Clients
                    </Link>
                  </li> 
 
                  <li className="ml-5">
                    <Link
                      href="/contactUs"
                      className="inline-block text-[20px] font-medium transition-all duration-500 ease-in-out hover:bg-[var(--secondary-color)] rounded-[12px] bg-[var(--primary-color)] px-7 py-2 text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
 
            {/* Mobile Toggle */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-[50px] w-[50px] items-center justify-center rounded bg-white shadow-md"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
 
      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Courses</Link></li>
              <li><Link href="#">Faculty</Link></li>
              <li><Link href="#">Programs</Link></li>
              <li><Link href="#">Membership</Link></li>
              <li><Link href="#">Events</Link></li>
              <li><Link href="#">Contact</Link></li>
 
              <li>
                <Link
                  href="#"
                  className="inline-block text-[15px] rounded-full bg-[#c8a96a] px-6 py-3 text-white font-semibold"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
 