import React from 'react';
import banner1Image from '../assets/images/Rectangle 12.png';
import text1 from '../assets/images/cloudtext.png';
import cheffimg from '../assets/images/cloud.png';
import { useNavigate } from "react-router-dom";
import Batch from '../assets/images/batch.png';
import video from '../assets/images/video.png';
import spoon from '../assets/images/spoon.png';
import connectivity from '../assets/images/connectivity.png';

import insta from '../assets/images/insta.png';
import book from '../assets/images/author.png';
import expertise from '../assets/images/expertise.png';

function CloudKitchenBanner() {
    const navigate = useNavigate();
  return (
    <div>
        


            <div className="relative w-full max-w-7xl">
                <div className="relative w-full rounded-xl overflow-hidden h-[110vh] md:h-[85vh] lg:h-[100vh]">
                  <img
                    src={banner1Image}
                    alt="Banner"
                    className="w-full h-full object-cover rounded-xl"
                  />
                   <div className="absolute inset-0 bg-opacity-0"></div>
                </div>
                

                <img
                    src={text1}
                    className="absolute w-[80%] sm:w-3/4 top-8 left-1/2 transform -translate-x-1/2 z-10"
                    alt="Main Text Overlay"
                />

                <p className="absolute left-2 md:left-8 lg:left-8 top-20 md:top-40 lg:top-40  text-white font-medium text-sm md:text-base lg:text-2xl z-10">
                    Even If You Don't Have Any Prior Experience In Baking!
                </p>

                <div className="absolute left-5 md:left-36 top-32 md:top-48 lg:top-52 text-white text-left space-y-4 text-sm md:text-base lg:text-xl z-10 leading-relaxed mt-2 md:mt-4 lg:mt-10">
                    <p className="flex items-center gap-3">
                        <img src={Batch} alt="Batch Icon" className="w-6 h-6" />
                        Batch II Start Date - 31st July 2025
                    </p>
                    <p className="flex items-center gap-3">
                        <img src={video} alt="Video Icon" className="w-6 h-6" />
                        10+ Hrs of Pre-Recorded Video Content
                    </p>
                    <p className="flex items-center gap-3">
                        <img src={spoon} alt="Spoon Icon" className="w-6 h-6" />
                        100+ Baking Recipes
                    </p>
                    <p className="flex items-center gap-3">
                        <img src={connectivity} alt="Connectivity Icon" className="w-6 h-6" />
                        Exclusive Masterclasses
                    </p>
                </div>

                <div className="absolute left-20 md:left-32 top-[20rem] md:top-[28rem] text-white font-bold  text-sm md:text-sm lg:text-2xl z-10">
                    Program Fees: ₹ 80,000 | INR 28,000 /-
                </div>

                <button
      onClick={() => navigate("/enroll")}
      className="absolute text-sm md:text-base lg:text-2xl left-20 md:left-56 lg:left-56 bottom-[220px] md:bottom-[160px] lg:bottom-32 z-20 bg-[#C34F4F] hover:bg-[#D57A66] text-white font-semibold py-2 px-6 md:px-8 lg:px-10 rounded-full transition duration-300"
    >
      ENROLL NOW
    </button>


                <img
  src={cheffimg}
  alt="Chef"
  className="absolute right-2 md:right-4 lg:right-6 bottom-[400px] md:bottom-[220px] lg:bottom-28 
             w-20 md:w-40 lg:w-[400px] 
             h-30 md:h-40 lg:h-[400px] 
             rounded-full border-4 border-white object-cover z-10"
/>


                <p className="absolute bottom-[280px]  md:bottom-[118px] lg:bottom-20 left-0 md:left-24 text-sm md:text-base lg:text-lg text-red-500 z-10 bg-white px-1 md:px-4 py-1">
                    We're looking for Action Takers. Program open for 50 participants only.
                </p>

            
                <div className="absolute bottom-24 md:bottom-1 lg:bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 lg:gap-48">
                  <img src={insta} alt="Instagram Icon" className="w-22 md:w-28 lg:w-40" />
                  <img src={book} alt="Author Icon" className="w-22 md:w-28 lg:w-40" />
                  <img src={expertise} alt="Expertise Icon" className="w-22 md:w-28 lg:w-40" />
                </div>
                

            </div>
    </div>
  )
}

export default CloudKitchenBanner