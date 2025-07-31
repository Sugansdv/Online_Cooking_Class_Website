import React from 'react';

const WhatWeOffer = () => {
  return (
    <div className="bg-[#fff7f1] py-12 px-6 md:px-16 text-black">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8 uppercase">
        What We Offers
      </h2>

      <ul className="space-y-6 max-w-5xl mx-auto text-base md:text-lg leading-relaxed ">
        <li className="flex items-start gap-3">
          <span className="text-[#c94f4f] text-2xl leading-none">•</span>
          <span className="text-xl md:text-2xl">
            <strong className="text-[#c94f4f] ">Tasty Recipes:</strong> From quick weeknight dinners to indulgent desserts, our recipes cover every occasion and dietary preference. Each recipe is tested and designed to be easy to follow, so you can enjoy the process as much as the result!
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-[#c94f4f] text-2xl leading-none">•</span>
          <span className="text-xl md:text-2xl">
            <strong className="text-[#c94f4f]">Helpful Cooking Tips:</strong> Our step-by-step guides, cooking hacks, and ingredient substitutions will help you master new techniques and cook with confidence.
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-[#c94f4f] text-2xl leading-none">•</span>
          <span className="text-xl md:text-2xl">
            <strong className="text-[#c94f4f]">Community of Food Lovers:</strong> Join our vibrant community of home cooks, share your own recipes, leave reviews, and inspire others. We believe cooking is even more enjoyable when shared!
          </span>
        </li>
      </ul>
    </div>
  );
};

export default WhatWeOffer;
