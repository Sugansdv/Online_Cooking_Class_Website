import React from 'react';
import banner2Image from '../assets/images/cdbanner2.png';

function CourseCurriculum() {
  return (
    <div>
        <h2 className='text-3xl font-bold text-gray-800 mt-6 mb-10'>Course Curriculum</h2>
        
                    <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden">
        
                        <img
  src={banner2Image}
  alt="Course Curriculum"
  className="w-full h-[50vh] sm:h-[75vh] md:h-[105vh] lg:h-auto object-cover rounded-xl"
/>

                       <div className="absolute -top-[5px] md:-top-[40px] lg:-top-[70px] right-[28px] md:right-[35px] lg:right-[170px] h-full flex items-center justify-end px-1">
  <ul className="list-disc list-inside text-left text-black text-sm md:text-xl lg:text-2xl font-semibold sm:space-y-4 rounded-xl sm:p-8 w-[90%] sm:w-[400px] max-h-[90%]">
    <li className="whitespace-nowrap">Introduction: Restaurant style dishes</li>
    <li className="whitespace-nowrap">Master class with master chef</li>
    <li className="whitespace-nowrap">Restaurant style dishes: Accompaniments</li>
    <li className="whitespace-nowrap">Breads</li>
    <li className="whitespace-nowrap">Desserts</li>
    <li className="whitespace-nowrap">Main course – non veg</li>
    <li className="whitespace-nowrap">Main course – veg</li>
    <li className="whitespace-nowrap">Rice</li>
    <li className="whitespace-nowrap">Soup – veg</li>
    <li className="whitespace-nowrap">Starters non – veg</li>
    <li className="whitespace-nowrap">Soup non – veg</li>
    <li className="whitespace-nowrap">Starters veg</li>
    <li className="whitespace-nowrap">Bonus course: All about US Assessments</li>
    <li className="whitespace-nowrap">Thank you</li>
  </ul>
</div>

                    </div>
    </div>
  )
}

export default CourseCurriculum