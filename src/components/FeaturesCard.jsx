import React from 'react';

// Import your custom icon images
import pencilIcon from '../assets/images/pencil.png';
import refreshIcon from '../assets/images/arrow.png';
import utensilsIcon from '../assets/images/fork.png';
import listIcon from '../assets/images/file.png';
import monitorIcon from '../assets/images/monitor.png';
import certificateIcon from '../assets/images/file.png'; // new icon for certificate

const features = [
  {
    icon: pencilIcon,
    text: "1 YEAR ACCESS TO EXCLUSIVE RECIPE VIDEOS, NOT AVAILABLE ON YOUTUBE",
  },
  {
    icon: refreshIcon,
    text: "MORE THAN 140 DOWNLOADABLE SIGNATURE RECIPES FROM THE MASTERCHEF",
  },
  {
    icon: utensilsIcon,
    text: "LEARN HOW TO COOK DISHES FROM BASIC TO ADVANCED RECIPES",
  },
  {
    icon: listIcon,
    text: "WATCH VIDEO UNLIMITED TIMES AND DOWNLOAD RECIPES PDFS",
  },
  {
    icon: monitorIcon,
    text: "LEARN FROM ANYWHERE WITH ANY DEVICE – MOBILE, DESKTOP, OR LAPTOP",
  },
  {
    icon: certificateIcon,
    text: "COURSE COMPLETION CERTIFICATE",
  },
];

function FeaturesCard() {
  return (
    <div className="w-full bg-[#A4CE4E] text-white py-20 px-6 sm:px-12 rounded-2xl shadow-md max-w-6xl mx-auto mt-10 min-h-fit">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.length > 0 ? (
          features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-6 mt-6">
              <img src={feature.icon} alt="Feature Icon" className="w-12 h-12" />
              <p className="font-bold text-base sm:text-lg lg:text-xl text-start">
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
