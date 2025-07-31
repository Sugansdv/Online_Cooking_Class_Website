import React from "react";
import chefImage from "../assets/images/Group 24.png";
import { useNavigate } from "react-router-dom";

const CookingPromo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/courses");
    c;
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center p-6 md:p-12 gap-10 max-w-7xl mx-auto">
      {/* Left Column */}
      <div className="flex-1 max-w-2xl h-auto md:h-auto lg:h-[400px] flex flex-col justify-center bg-gradient-to-b from-[#c5df9b] to-white rounded-2xl shadow-md p-6 text-center">
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
        <div className="">
          <button
            onClick={handleClick}
            className="bg-[#b14444] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#962f2f] transition duration-300"
          >
            VIEW COURSES
          </button>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="flex-1 max-w-lg h-auto md:h-auto lg:h-[400px] flex items-center">
        <img
          src={chefImage}
          alt="Chefs cooking"
          className="w-full h-full object-cover rounded-2xl shadow-md"
        />
      </div>
    </div>
  );
};

export default CookingPromo;
