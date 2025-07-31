import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm'
import CourseBanner from '../components/CourseBanner'

function Contact() {
   useEffect(() => {
           document.title = "Flavour Theory | Contact";
         }, []);
  return (
     <div className="min-h-screen bg-[#fff7f1] ">
        <ContactForm />
        <CourseBanner />
     </div>
  )
}

export default Contact