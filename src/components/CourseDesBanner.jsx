import React from 'react';
import banner1Image from '../assets/images/cdbanner1.png';
import insta from '../assets/images/insta.png';
import book from '../assets/images/author.png';
import expertise from '../assets/images/expertise.png';
import { useNavigate } from "react-router-dom";
function CourseDesBanner() {
   const navigate = useNavigate();
  return (
    <div>
      <div className="relative w-full max-w-7xl mx-auto px-4 py-6 sm:py-8 md:py-12">
       <div className="relative w-full rounded-xl overflow-hidden h-[70vh] sm:h-[50vh] md:h-[85vh] lg:h-auto">
  <img
    src={banner1Image}
    alt="Banner"
    className="w-full h-full object-cover rounded-xl"
  />
</div>



        <div className="absolute top-20 sm:top-30 md:top-36 lg:top-60 left-1/2 transform -translate-x-1/2 w-full text-center px-4 sm:px-4 z-10">
          <div className="flex flex-col items-center">
            <h2 className="text-xs sm:text-lg md:text-xl lg:text-4xl w-11/12 md:w-3/4 font-bold text-black leading-tight">
              From Butter Chicken to Singaporean Noodles: Cook India’s Favourite Dishes at Home
            </h2>
          </div>

          <p className="mt-1 sm:mt-2 md:mt-3 text-[10px] sm:text-sm md:text-base lg:text-2xl text-black font-medium max-w-sm sm:max-w-lg md:max-w-xl mx-auto leading-snug">
            In just 90 days, master the art of cooking 140+ basic to advanced Restaurant and Home styled dishes with step-by-step guidance and recipes!
          </p>

          <p className="mt-1 sm:mt-2 md:mt-3 text-[11px] sm:text-base md:text-lg lg:text-4xl font-bold text-black">
            Limited Period Offer – Get 67% OFF
          </p>

          <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:my-2 sm:my-4 lg:my-6">
            <p className="text-gray-500 line-through font-semibold text-[11px] sm:text-sm md:text-lg lg:text-4xl">
              ₹ 6000
            </p>
            <p className="text-[11px] sm:text-base md:text-lg lg:text-4xl text-black font-bold">
              ₹ 1,999
            </p>
          </div>

          <button 
          onClick={() => navigate("/enroll")}
          className="bg-rose-800 hover:bg-red-600 text-white text-[11px] sm:text-sm md:text-lg lg:text-2xl font-semibold py-1 sm:py-2 md:py-3 px-4 sm:px-6 md:px-8 rounded-full">
            ENROLL NOW
          </button>

          <p className="mt-3 sm:mt-4 md:mt-6 text-[10px] sm:text-base md:text-lg lg:text-2xl font-bold text-black max-w-sm sm:max-w-xl md:max-w-2xl mx-auto leading-snug">
            Learn the secrets of cooking delicious restaurant and home-style dishes with the Masterchef & ace the art of recreating amazing cuisines at home.
          </p>
        </div>

        <div className="absolute bottom-24 sm:bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 lg:gap-48">
  <img src={insta} alt="Instagram Icon" className="w-22 md:w-28 lg:w-40" />
  <img src={book} alt="Author Icon" className="w-22 md:w-28 lg:w-40" />
  <img src={expertise} alt="Expertise Icon" className="w-22 md:w-28 lg:w-40" />
</div>

      </div>
    </div>
  );
}

export default CourseDesBanner;
