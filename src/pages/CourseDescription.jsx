import React, { useEffect } from 'react';
import CourseDesBanner from '../components/CourseDesBanner';
import CourseCurriculum from '../components/CourseCurriculum';
import banner3Image from '../assets/images/cdbanner3.png';
import Testimonials from '../components/Testimonials';
import CourseBanner from '../components/CourseBanner';
import bannerImage from '../assets/images/bakkery2.png';
import RecipeCard from '../components/RecipeCard';
import FeaturesCard from '../components/FeaturesCard';

const CourseDescription = () => {
    useEffect(() => {
            document.title = "Flavour Theory | CourseDescription";
          }, []);
    return (
        <div className="w-full flex flex-col items-center bg-[#fff7f0] px-4 text-center">

            <CourseDesBanner />
            <CourseCurriculum />
            
            <RecipeCard />
            <Testimonials />
            
            <FeaturesCard />

            <CourseBanner />
            
        </div>
    );
};

export default CourseDescription;