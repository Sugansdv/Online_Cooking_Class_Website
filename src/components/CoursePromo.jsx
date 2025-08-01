import React, { useEffect, useState } from "react";
import chefImage from "../assets/images/Group 6.png";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function CoursePromo() {
  const navigate = useNavigate();

  // Animation state to trigger fade-in
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row gap-6 md:gap-x-6 p-4 md:p-8 rounded-[30px] max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Left image with hover zoom effect */}
      <div className="w-full md:basis-[50%] lg:basis-[50%] overflow-hidden rounded-[30px] transform hover:scale-105 transition duration-500">
        <img
          src={chefImage}
          alt="Chef"
          className="w-full h-full object-cover rounded-[30px]"
        />
      </div>

      {/* Right Content */}
    <div className="w-full md:basis-[75%] lg:basis-[70%] flex items-stretch border-4 border-[#A7C957] rounded-[20px]">
        <div className="relative flex w-full bg-white rounded-[15px] overflow-hidden">

          {/* Left Bar */}
          <div
            className="hidden md:block absolute top-0 left-0 h-full w-[60px] bg-[#A7C957]  z-20"
            style={{ clipPath: "polygon(80% 0, 0 175%, 0 0)" }}
          />

          {/* Right Bar */}
          <div
              className="hidden md:block absolute top-0 right-0 h-full w-[60px] bg-[#A7C957] z-20"
            style={{ clipPath: "polygon(60% 0, 30% 100%, 10000% 110%)" }}
          />

          {/* Inner content */}
          <div className="flex-1 relative z-10 bg-white p-6 md:p-10">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 leading-tight text-center px-10 animate-fade-in">
              TAKE YOUR COOKING SKILLS TO THE NEXT LEVEL WITH MASTER CHEFS
            </h1>
            <p className="text-sm md:text-base text-gray-700 mb-6 px-8">
              CULINARY TIPS AND TRICKS STRAIGHT FROM THE EXPERT, ON HOW
              TO COOK SCRUMPTIOUS, INSTAGRAM READY, LIP SMACKING DISHES
              THAT ARE CLEAN, HEALTHY, AND ENERGIZING.
            </p>
            <div className="w-full">
              <button
                onClick={navigate.bind(null, "/courses")}
                className="mx-auto block bg-red-600 hover:bg-orange-500 text-white font-semibold py-2 px-8 rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 uppercase tracking-wide text-sm md:text-lg"
              >
                VIEW COURSES
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
