import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/logo_img2.png"; 
import logo2 from "../assets/images/logo_img1.png"; 
export default function EnrollNavbar() {
   const [hoverLogo, setHoverLogo] = useState(false);
  return (
    <header className="bg-[#FFF5E1] flex justify-between items-center px-4 sm:px-10 py-4">
      {/* Logo */}
       <div
              className="flex items-center"
              onMouseEnter={() => setHoverLogo(true)}
              onMouseLeave={() => setHoverLogo(false)}
            >
              <img
                src={hoverLogo ? logo1 : logo2}
                alt="Flavour Theory"
                className="h-[100px] w-[200px] sm:h-[120px] sm:w-[220px] md:h-[130px] md:w-[240px] transition duration-300 ease-in-out"
              />
            </div>

      {/* Icons and Text */}
      <nav className="flex items-center gap-6 text-black font-bold text-sm sm:text-lg">
        <Link to="/" className="flex flex-col items-center hover:opacity-80">
          <AiFillHome className="text-2xl" />
          <span>HOME</span>
        </Link>
      </nav>
    </header>
  );
}
