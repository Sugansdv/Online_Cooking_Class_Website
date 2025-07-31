import React, { useEffect } from 'react';
import CourseBanner from '../components/CourseBanner';
import CloudKitchenBanner from '../components/CloudKitchenBanner';
import FeaturesCard from '../components/FeaturesCard';


function CloudKitchen() {
  useEffect(() => {
        document.title = "Flavour Theory | CloudKitchen";
      }, []);
  return (
        <div className="w-full flex flex-col items-center bg-white px-4 text-center mt-10">
           
            <CloudKitchenBanner />

           
            <FeaturesCard />




            <CourseBanner />
        </div>
    );
};

export default CloudKitchen