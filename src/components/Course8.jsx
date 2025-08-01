import React from 'react';
import banner1Image from '../assets/images/Rectangle 12.png';
import insta from '../assets/images/insta.png';
import book from '../assets/images/author.png';
import expertise from '../assets/images/expertise.png';
import { useNavigate } from "react-router-dom";
import FeaturesCard from './FeaturesCard';
import CourseBanner from './CourseBanner';
function Course8() {
   const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center bg-white px-4 text-center mt-10">
      <div className="relative w-full max-w-6xl mx-auto px-4 py-6 sm:py-8 md:py-12">
       <div className="relative w-full rounded-xl overflow-hidden h-[70vh] sm:h-[50vh] md:h-[85vh] lg:h-auto">
  <img
    src={banner1Image}
    alt="Banner"
    className="w-full h-full object-cover rounded-xl"
  />
</div>



        <div className="absolute top-20 sm:top-30 md:top-36 lg:top-40 left-1/2 transform -translate-x-1/2 w-full text-center px-4 sm:px-4 z-10">
          <div className="flex flex-col items-center">
            <h2 className="text-xs sm:text-lg md:text-xl lg:text-4xl w-11/12 md:w-3/4 font-bold text-white leading-tight">
            From Simple to Stunning: Master the Art of Garnishing and Plating Like a Pro
            </h2>
          </div>

          <p className="mt-1 sm:mt-2 md:mt-3 text-[10px] sm:text-sm md:text-base lg:text-2xl text-white font-medium max-w-sm sm:max-w-lg md:max-w-xl mx-auto leading-snug">
          In just 45 days, elevate your presentation skills with 80+ techniques on modern plating, creative garnishes, and visual harmony — perfect for chefs, food creators, and home cooks.
            </p>
          <p className="mt-1 sm:mt-2 md:mt-3 text-[11px] sm:text-base md:text-lg lg:text-4xl font-bold text-white">
            Limited Period Offer – Get 67% OFF
          </p>

          <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:my-2 sm:my-4 lg:my-6">
            <p className="text-white line-through font-semibold text-[11px] sm:text-sm md:text-lg lg:text-4xl">
              ₹ 6000
            </p>
            <p className="text-[11px] sm:text-base md:text-lg lg:text-4xl text-white font-bold">
              ₹ 1,999
            </p>
          </div>

          <button 
          onClick={() => navigate("/enroll")}
          className="bg-[#C34F4F] hover:bg-[#D57A66] text-white text-[11px] sm:text-sm md:text-lg lg:text-2xl font-semibold py-1 sm:py-2 md:py-3 px-4 sm:px-6 md:px-8 rounded-full">
            ENROLL NOW
          </button>

          <p className="mt-3 sm:mt-4 md:mt-6 text-[10px] sm:text-base md:text-lg lg:text-2xl font-bold text-white max-w-sm sm:max-w-xl md:max-w-2xl mx-auto leading-snug">
            Master food styling and plating that not only tastes great but looks spectacular on every plate.
             </p>
        </div>

        <div className="absolute bottom-24 sm:bottom-14 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 lg:gap-48">
  <img src={insta} alt="Instagram Icon" className="w-22 md:w-28 lg:w-40" />
  <img src={book} alt="Author Icon" className="w-22 md:w-28 lg:w-40" />
  <img src={expertise} alt="Expertise Icon" className="w-22 md:w-28 lg:w-40" />
</div>

      </div>
      <FeaturesCard />
      <CourseBanner />
    </div>
  );
}

export default Course8;

