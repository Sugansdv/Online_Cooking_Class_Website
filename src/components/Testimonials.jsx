import React, { useState, useEffect } from "react";

import image1 from '../assets/images/user_profile.jpg';
import image2 from '../assets/images/user_profile1.png';
import image3 from '../assets/images/user_profile2.png';
import image4 from '../assets/images/user_profile3.png';
import image5 from '../assets/images/user_profile4.png';

const testimonials = [
    {
        image: image1,
        quote: "FUN, HANDS-ON, AND DELICIOUS-WHAT MORE COULD YOU WANT?",
        author: "EMILY T",
    },
    {
        image: image5,
        quote: "i FINALLY LEARNED HOW TO COOK WIHTOUT GOOGLING EVERY STEP!",
        author: "JASON M",
    },
    {
        image: image4,
        quote: "THE CLASS WAS EASY TO FOLLOW AND THE FOOD TURNED OUT AMAZING!",
        author: "NATALIE R",
    },
    {
        image: image2,
        quote: "CHEF MADE IT FUN, EVEN FOR A TOTAL BEGINNER LIKE ME",
        author: "CARLOS D",
    },
    {
        image: image3,
        quote: "LEFT WITH NEW SKILLS AND A FULL BELLY. HIGHLY RECOMMEND!",
        author: "MAYA S",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    const { image, quote, author } = testimonials[index];

    return (
        <div className="w-full bg-[#fff7f0] py-12 px-4">
            <div className="relative max-w-3xl mx-auto bg-[#fdf1dd] rounded-xl p-6 sm:p-10 pt-16 text-center shadow-md md:min-h-[300px] lg:min-h-[350px]">


                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 ">
                    <img
                        src={image}
                        alt={author}
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-md "
                    />
                </div>

                <p className="text-lg md:text-xl lg:text-4xl font-bold text-black mb-4 mt-20 ">"{quote}"</p>

                <div className="text-right">
                    <p className="text-lg md:text-xl lg:text-4xl font-bold text-black">– {author}</p>
                </div>
            </div>


        </div>
    );
};

export default Testimonials;
