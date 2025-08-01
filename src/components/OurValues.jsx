import React from 'react';
import pizzaImage from '../assets/images/Group 46.png';

const OurValues = () => {
  return (
    <div className="bg-[#fff7f1] py-12 px-4 sm:px-8 md:px-20 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-6">OUR VALUES</h2>

      <div className="relative w-full h-auto sm:h-[80vh] lg:h-[70vh] mx-auto overflow-hidden rounded-3xl">
        {/* Background Image */}
        <img
          src={pizzaImage}
          alt="Food background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Text Content */}
        <div className="relative z-10 flex items-center justify-center px-4 py-10 sm:px-10 h-full">
          <div className="text-white text-left w-full max-w-[90%] sm:max-w-2xl mx-auto">
            <ul className="list-disc list-inside space-y-4 text-sm sm:text-base md:text-lg lg:text-2xl font-medium leading-relaxed">
              <li>
                <strong>Simplicity:</strong> We keep our recipes simple and approachable, so even beginners can enjoy cooking.
              </li>
              <li>
                <strong>Creativity:</strong> We encourage experimenting in the kitchen, mixing ingredients, and discovering new flavors.
              </li>
              <li>
                <strong>Community:</strong> Cooking is more fun when shared. We foster a community of like-minded food lovers who support and inspire each other.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
