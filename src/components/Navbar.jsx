import React, { useState, useEffect } from "react";
import logo1 from "../assets/images/logo_img1.png";
import logo2 from "../assets/images/logo_img2.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hoverLogo, setHoverLogo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

 useEffect(() => {
  const loadUser = () => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedIn);
  };

  loadUser();

  window.addEventListener("userLogin", loadUser);

  return () => window.removeEventListener("userLogin", loadUser);
}, []);


  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-[#FFF5E1] px-4 sm:px-8 md:px-14 py-4 flex items-center justify-between flex-wrap">
      {/* Logo */}
      <div
        className="flex items-center space-x-4"
        onMouseEnter={() => setHoverLogo(true)}
        onMouseLeave={() => setHoverLogo(false)}
      >
        <img
          src={hoverLogo ? logo1 : logo2}
          alt="Flavour Theory"
          className="h-[100px] w-[200px] sm:h-[120px] sm:w-[220px] md:h-[130px] md:w-[240px] transition duration-300"
        />
      </div>

      <ul className="hidden lg:flex items-center space-x-16 font-semibold text-[#5B4E44] text-base lg:text-2xl relative">
        <li className="hover:opacity-70"><Link to="/">HOME</Link></li>
        <li className="hover:opacity-70"><Link to="/about">ABOUT</Link></li>

        {/* Programs Dropdown */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setShowPrograms(true)}
          onMouseLeave={() => setShowPrograms(false)}
        >
          <div className="flex items-center">
            PROGRAMS <span className="ml-1">▼</span>
          </div>
          {showPrograms && (
            <div className="absolute top-full left-0 mt-1 bg-[#FFF5E1] shadow-lg text-black w-64 z-50 rounded-md border border-gray-200">
              <ul className="p-4 space-y-2 text-base lg:text-xl">
                <li className="hover:font-semibold">
                  <Link to="/bakery" className="block hover:bg-[#f0e4d2] px-2 py-1 rounded-md">
                    BAKERY BUSINESS ACCELERATOR
                  </Link>
                </li>
                <li className="hover:font-semibold">
                  <Link to="/cloud-kitchen" className="block hover:bg-[#f0e4d2] px-2 py-1 rounded-md">
                    CLOUD KITCHEN ACCELERATOR
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* Courses Dropdown */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setShowCourses(true)}
          onMouseLeave={() => setShowCourses(false)}
        >
          <div className="flex items-center">
            <Link to="/courses">COURSES</Link> <span className="ml-1">▼</span>
          </div>
          {showCourses && (
            <div className="absolute top-full left-0 mt-1 bg-[#FFF5E1] shadow-lg text-black w-80 z-50 rounded-md border border-gray-200">
              <ul className="p-4 space-y-2 text-base lg:text-md">
                {[
                  "THE GOOD FUT PROGRAM",
                  "FOOD LOOK GOOD",
                  "START YOUR BUSINESS FROM HOME - NON VEG & VEG",
                  "START YOUR FOOD BUSINESS FROM HOME - VEG ONLY",
                  "IMMUNITY BOOSTER RECIPES",
                  "INDIA’S FAVOURITES: RESTAURANTS AND HOME STYLE DISHES",
                  "VEGETARIAN’S DELIGHT",
                  "GARNISHING & PLATING",
                ].map((course, i) => (
                  <li key={i} className="hover:font-semibold">
                    <Link to="/course-des" className="block hover:bg-[#f0e4d2] px-2 py-1 rounded-md">
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        <li className="hover:opacity-70"><Link to="/contact">CONTACT</Link></li>
      </ul>

      {/* Right Side - Login & Hamburger */}
      <div className="flex items-center space-x-3">
        {user ? (
          <div className="relative max-w-[200px]">
<button
  onClick={() => setDropdownOpen(!dropdownOpen)}
  className="bg-[#BF4444] text-white text-sm lg:text-base font-bold px-4 py-1.5 lg:px-10 lg:py-2 rounded-full hover:bg-[#a93b3b] truncate"
  title={`Hello! ${user?.name || "User"}`}
>
  Hello! {user?.name || "User"}
</button>



  {dropdownOpen && (
    <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-50 w-32">
      <button
        onClick={logout}
        className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-100"
      >
        Logout
      </button>
    </div>
  )}
</div>

        ) : (
          <>
            <div className="block lg:hidden">
              <Link to="/login">
                <button className="bg-[#BF4444] text-white text-sm font-bold px-4 py-1.5 rounded-full hover:bg-[#a93b3b]">
                  LOGIN
                </button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <Link to="/login">
                <button className="bg-[#BF4444] text-base lg:text-2xl text-white font-bold px-8 py-2 rounded-full hover:bg-[#a93b3b]">
                  LOGIN
                </button>
              </Link>
            </div>
          </>
        )}

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#5B4E44] focus:outline-none"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="w-full lg:hidden mt-4 text-[#5B4E44] font-semibold text-base space-y-3 px-4">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link><br />
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>

          {/* Programs Toggle */}
          <div>
            <button onClick={() => setShowPrograms(!showPrograms)} className="w-full flex justify-between">
              <span>PROGRAMS</span><span>▼</span>
            </button>
            {showPrograms && (
              <div className="pl-4 mt-1 text-sm space-y-1">
                <Link to="/bakery" onClick={() => setMobileMenuOpen(false)}>BAKERY BUSINESS ACCELERATOR</Link>
                <Link to="/cloud-kitchen" onClick={() => setMobileMenuOpen(false)}>CLOUD KITCHEN ACCELERATOR</Link>
              </div>
            )}
          </div>

          {/* Courses Toggle */}
          <div>
            <button onClick={() => setShowCourses(!showCourses)} className="w-full flex justify-between">
              <span>COURSES</span><span>▼</span>
            </button>
            {showCourses && (
              <div className="pl-4 mt-1 text-sm space-y-1">
                {[
                  "THE GOOD FUT PROGRAM",
                  "FOOD LOOK GOOD",
                  "START YOUR BUSINESS FROM HOME - NON VEG & VEG",
                  "START YOUR FOOD BUSINESS FROM HOME - VEG ONLY",
                  "IMMUNITY BOOSTER RECIPES",
                  "INDIA’S FAVOURITES: RESTAURANTS AND HOME STYLE DISHES",
                  "VEGETARIAN’S DELIGHT",
                  "GARNISHING & PLATING",
                ].map((course, i) => (
                  <Link key={i} to="/course-des" onClick={() => setMobileMenuOpen(false)}>{course}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
}
