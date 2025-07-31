import React, { useEffect } from 'react';
import bannerImage from '../assets/images/bakkery2.png';
import BakeryBanner from '../components/bakerybanner';
import CourseBanner from '../components/CourseBanner';
import {
  PencilSquareIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  ListBulletIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    icon: <PencilSquareIcon className="w-10 h-10 text-white" />,
    text: "1 YEAR ACCESS TO EXCLUSIVE RECIPE VIDEOS, NOT AVAILABLE ON YOUTUBE",
  },
  {
    icon: <ArrowPathIcon className="w-10 h-10 text-white" />,
    text: "MORE THAN 140 DOWNLOADABLE SIGNATURE RECIPES FROM THE MASTERCHEF",
  },
  {
    icon: <AcademicCapIcon className="w-10 h-10 text-white" />,
    text: "LEARN HOW TO COOK DISHES FROM BASIC TO ADVANCED RECIPES",
  },
  {
    icon: <ListBulletIcon className="w-10 h-10 text-white" />,
    text: "WATCH VIDEO UNLIMITED TIMES AND DOWNLOAD RECIPES PDFS",
  },
  {
    icon: <DevicePhoneMobileIcon className="w-10 h-10 text-white" />,
    text: "LEARN FROM ANYWHERE WITH ANY DEVICE – MOBILE, DESKTOP, OR LAPTOP",
  },
  {
    icon: <ClipboardDocumentCheckIcon className="w-10 h-10 text-white" />,
    text: "COURSE COMPLETION CERTIFICATE",
  },
];

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
            
                        <p className="mt-2 mb-8 max-w-4xl text-2xl font-semibold text-rose-800">
                            Program Limited to 50 people Only!
                        </p>
            <BakeryBanner />

            {/* <div className="relative w-full max-w-5xl mt-6">
                <img
                    src={bannerImage}
                    alt="Bakery Banner"
                    className="w-full rounded-xl object-cover"
                />
            </div> */}

            <div className="w-full bg-[#A4CE4E] text-white py-20 px-6 sm:px-12 rounded-2xl shadow-md max-w-6xl mx-auto mt-10 min-h-fit">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {features && features.length > 0 ? (
      features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center gap-5 mt-5">
          {feature.icon}
          <p className="font-bold text-base sm:text-lg lg:text-xl text-center">{feature.text}</p>
        </div>
      ))
    ) : (
      <div className="col-span-full text-center text-white text-lg">No features available</div>
    )}
  </div>
</div>

            <CourseBanner />
        </div>
    );
};

export default BakeryPromo

