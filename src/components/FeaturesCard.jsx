import React from 'react';
import { Pencil, RefreshCcw, Utensils, List, Monitor } from "lucide-react";

const features = [
  {
    icon: <Pencil size={36} />,
    text: "1 YEAR ACCESS TO EXCLUSIVE RECIPE VIDEOS, NOT AVAILABLE ON YOUTUBE",
  },
  {
    icon: <RefreshCcw size={36} />,
    text: "MORE THAN 140 DOWNLOADABLE SIGNATURE RECIPES FROM THE MASTERCHEF",
  },
  {
    icon: <Utensils size={36} />,
    text: "LEARN HOW TO COOK DISHES FROM BASIC TO ADVANCED RECIPES",
  },
  {
    icon: <List size={36} />,
    text: "WATCH VIDEO UNLIMITED TIMES AND DOWNLOAD RECIPES PDFS",
  },
  {
    icon: <Monitor size={36} />,
    text: "LEARN FROM ANYWHERE WITH ANY DEVICE – MOBILE, DESKTOP, OR LAPTOP",
  },
  {
    icon: <List size={36} />,
    text: "COURSE COMPLETION CERTIFICATE",
  },
];

function FeaturesCard() {
  return (
    <div className="w-full bg-[#A4CE4E] text-white py-20 px-6 sm:px-12 rounded-2xl shadow-md max-w-7xl mx-auto mt-10 min-h-fit">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.length > 0 ? (
          features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-5 mt-5">
              {feature.icon}
              <p className="font-bold text-base sm:text-lg lg:text-xl text-center">
                {feature.text}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-white text-lg">
            No features available
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturesCard;
