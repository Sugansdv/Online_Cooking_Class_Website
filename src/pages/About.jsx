import React, { useEffect } from 'react';
import CookingPromo from '../components/CookingPromo'
import AboutUs from '../components/AboutUs'
import AboutSection from '../components/AboutSection'
import OfferBanner from '../components/OfferBanner'
import WhatWeOffer from '../components/WhatWeOffer'
import CourseBanner from '../components/CourseBanner'
import OurValues from '../components/OurValues'

function About() {
   useEffect(() => {
    document.title = "Flavour Theory | About";
  }, []); 
  return (
    <div className="min-h-screen bg-[#fff7f1] ">
        <CookingPromo />
        <AboutUs />
        <AboutSection />
        <WhatWeOffer />
        <OfferBanner />
        <OurValues />
        <CourseBanner />
    </div>
  )
}

export default About