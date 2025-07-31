import React, { useEffect } from 'react';

function EnrollSuccess() {
  useEffect(() => {
            document.title = "Flavour Theory | Enrollment";
          }, []);
  return (
    <div className="flex flex-col items-center justify-center bg-[#fcf7f2] px-6 py-20 text-center">
  <h1 className="text-3xl md:text-4xl font-bold my-10 mx-[50px] lg:mx-[440px]">
    YOUR ENROLL OUR COURSES SUCCESSFULLY 
  </h1>
  <p className="text-lg md:text-2xl font-semibold text-black mx-[50px] lg:mx-[360px] lg:mt-10">
    THE FLOVER THEORY TEAM WILL SEND THE COURSE DETAILS TO YOUR EMAIL & WHATSAPP.
  </p>
</div>

  )
}

export default EnrollSuccess