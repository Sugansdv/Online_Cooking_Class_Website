import React, { useEffect } from 'react';
import BakeryBanner from '../components/BakeryBanner';
import CourseBanner from '../components/CourseBanner';
import FeaturesCard from '../components/FeaturesCard';

function BakeryPromo() {
  useEffect(() => {
      document.title = "Flavour Theory | BAKERY BUSINESS";
    }, []); 
  return (
        <div className="w-full flex flex-col items-center bg-white px-4 text-center mt-10">
            {/* Title */}
                        <p className="max-w-4xl text-3xl font-bold text-gray-800 mt-6">
                            BAKERY BUSINESS ACCELERATOR PROGRAM.
                        </p>
            
                        <p className="mt-2 mb-8 max-w-4xl text-2xl font-semibold">
                            Program Limited to 50 people Only!
                        </p>
            <BakeryBanner />

            <FeaturesCard />

            <CourseBanner />
        </div>
    );
};

export default BakeryPromo

