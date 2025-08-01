import React from 'react';
import pizzaImage from '../assets/images/Rectangle 26.png';

const AboutSection = () => {
  return (
    <div className="bg-[#fff7f1] py-8 px-4 sm:px-8 md:px-20 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-6">OUR STORY</h2>

      <div className="relative w-full h-auto sm:h-[80vh] lg:h-[70vh] mx-auto overflow-hidden rounded-3xl">
        {/* Background Image */}
        <img
          src={pizzaImage}
          alt="Food background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0" />

        {/* Text Content */}
        <div className="relative z-10 flex items-center justify-center px-4 py-10 sm:px-10 h-full">
          <div className="text-white text-center w-full max-w-[90%] sm:max-w-2xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
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
