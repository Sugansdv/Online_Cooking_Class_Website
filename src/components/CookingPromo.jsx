import React, { useEffect, useState } from "react";
import chefImage from "../assets/images/Group 24.png";
import { useNavigate } from "react-router-dom";

const CookingPromo = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    navigate("/courses");
  };

  useEffect(() => {
    setAnimate(true); // Trigger animation on mount
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center p-6 md:p-12 gap-10 max-w-7xl mx-auto">
      {/* Left Column */}
      <div
        className={`flex-1 max-w-2xl h-auto lg:h-[400px] flex flex-col justify-center bg-gradient-to-b from-[#c5df9b] to-white rounded-2xl shadow-md p-6 text-center transform transition-all duration-1000 ease-in-out ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 leading-snug">
          MORE POWER TO YOUR COOKING!
          <br />
          THROUGH LEARNING
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-gray-800 my-10 leading-relaxed">
          Discover A Better Way Of Cooking Amazing Dishes
          <br />
          With Recipes Specially Curated By The Most
          <br />
          Celebrated Face In The Indian Cuisine.
        </p>
        <div>
          <button
            onClick={handleClick}
            className="bg-[#b14444] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#962f2f] transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            VIEW COURSES
          </button>
        </div>
      </div>

      {/* Right Column - Image */}
      <div
        className={`flex-1 max-w-lg h-auto lg:h-[400px] flex items-center justify-center transform transition-all duration-1000 ease-in-out ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <img
          src={chefImage}
          alt="Chefs cooking"
          className="w-full h-full object-cover rounded-2xl shadow-md transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default CookingPromo;
