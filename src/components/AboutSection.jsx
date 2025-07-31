import React from 'react';
import pizzaImage from '../assets/images/Rectangle 26.png'; // use your actual image path

const AboutSection = () => {
  return (
    
     <div className="bg-[#fff7f1] py-12 px-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">OUR STORY</h2>
    <div className="relative w-[97%] h-[100vh] lg:h-[70vh] mx-auto overflow-hidden rounded-3xl">
        
      {/* Background Image */}
      <img
        src={pizzaImage}
        alt="Food background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-10">
        <div className="text-white text-center max-w-2xl">
          <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
            Our journey began with a passion for food and the desire to share it with others.
            <br />
            <span className="font-semibold">Flavour theory</span>, a passionate home cook and food enthusiast,
            started the website to create a space where anyone, no matter their skill level, could discover new recipes,
            learn helpful cooking tips, and explore a world of flavors.
            <br /><br />
            Over the years, our team has grown, but our core values remain the same: to inspire home cooks everywhere
            to embrace the magic of the kitchen and make every meal a special occasion.
          </p>
        </div>
      </div>
    </div>
      </div>
  );
};

export default AboutSection;
