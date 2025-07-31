import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import bgImage from '../assets/images/COURSES.png';

const CourseCard = () => {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const courseData = [
    {
      title: 'IMMUNITY BOOSTER RECIPES',
      description:
        'Live Well And Boost Your Immunity With Time-Tested Immunity Booster Recipes From The Expert In Indian Cuisine',
      offer: 'Limited Period Offer – Get 40% OFF',
      priceOld: 4000,
      priceNew: 1999,
    },
    {
      title: 'GARNISHING & PLATING COURSE',
      description:
        'Love Plating Your Dishes Like An Expert? Take Professional Cues From MasterChef Sanjeev Kapoor To Excel In The Art Of Food Presentation!',
      offer: 'Limited Period Offer – Get 60% OFF',
      priceOld: 999,
      priceNew: 399,
    },
    {
      title: 'COOKING AT HOME RESTAURANT STYLE & HOME STYLE',
      description:
        'Cook Amazing Restaurant Style Dishes And Change Everyday Home Cooked Dishes Into Exceptional Dishes Your Family Will Love',
      offer: 'Get 90% OFF',
      priceOld: 6000,
      priceNew: 1999,
    },
    {
      title: "VEGETARIAN'S DELIGHT",
      description:
        'Cook The Tastiest VEGETARIAN Dishes Using Everyday Ingredients For Your Loved Ones At Home. A True Delight For A Vegetarian!',
      offer: 'Get 37% OFF',
      priceOld: 4000,
      priceNew: 2499,
    },
    {
      title: 'BASIC COOKING FOR SINGLES',
      description:
        'Impress Friends And Save Money By Making Amazing Food On Your Own Like The MasterChef. From How To Use A Cooker',
      offer: 'Limited Period Offer – Get 67% OFF',
      priceOld: 5999,
      priceNew: 1999,
    },
    {
      title: "INDIA'S FAVOURITES: RESTAURANTS AND HOME STYLE DISHES",
      description:
        'Impress Friends And Save Money By Making Amazing Food On Your Own Like The MasterChef. From How To Use A Cooker',
      offer: 'Limited Period Offer – Get 67% OFF',
      priceOld: 6000,
      priceNew: 1999,
    },
  ];

  const handleClick = () => {
    navigate("/course-des");
  };

  return (
    <div className="bg-[#FFF9F3] min-h-screen py-12 px-4 md:px-10 lg:px-20">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-10">ALL COURSES</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center max-w-7xl mx-auto">
        {courseData.map((course, index) => (
          <div
            key={index}
            className={`rounded-[20px] w-full max-w-[340px] h-[560px] p-6 text-left shadow-xl flex flex-col bg-cover bg-center transform transition duration-700 ease-in-out
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              hover:scale-105 hover:shadow-2xl`}
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-white font-bold text-xl uppercase mb-4 min-h-[64px] leading-snug">
                {course.title}
              </h3>

              <div className="rounded-xl p-4 text-black flex flex-col justify-start flex-grow min-h-[240px] mt-10">
                <p className="text-md mb-3 px-4 md:px-8 text-center font-semibold">{course.description}</p>
                <p className="font-bold px-4 md:px-8 text-center mt-2">{course.offer}</p>
                <div className="flex items-center gap-2 mt-2 justify-center">
                  <p className="line-through text-black/60 text-sm">₹{course.priceOld}</p>
                  <p className="text-lg font-semibold text-black">₹{course.priceNew}</p>
                </div>
              </div>

              <button 
                onClick={handleClick}
                className="bg-[#C24B4B] text-white font-semibold py-1 px-5 rounded-full hover:opacity-90 w-fit mx-auto">
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
