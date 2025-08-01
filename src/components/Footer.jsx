import React, { useState, useContext } from "react";
import { DropdownContext } from "./DropdownContext";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import logo1 from "../assets/images/logo_img1.png";
import logo2 from "../assets/images/logo_img2.png";
import { Link } from 'react-router-dom';

export default function Footer() {
  const [hovered, setHovered] = useState(false);
  const { setIsDropdownOpen } = useContext(DropdownContext);

  return (
    <footer className="bg-[#d57a66] text-white px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm md:text-base lg:text-lg">
        <div className="flex justify-center md:justify-start lg:mt-10">
          <img
            src={hovered ? logo1 : logo2}
            alt="Flavour Theory"
            className="w-[500 px] h-[20vh] transition duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>

        <div className="text-center md:text-left space-y-2 lg:ml-10">
          <h3 className="font-semibold text-white text-base lg:text-lg">
            HOME
          </h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about" className="hover:text-[#C3413B] transition">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/?openServices=true"
                onClick={() => {
                  setIsDropdownOpen(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-[#C3413B] transition">
                PROGRAMS
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-[#C3413B] transition">
                COURSES
              </Link>

            </li>
          </ul>
        </div>

        <div className="text-center md:text-left space-y-2 lg:-ml-[120px]">
          <h3 className="font-semibold text-white text-base lg:text-lg">
            COURSES
          </h3>
          <ul className="space-y-1 text-xs md:text-sm lg:text-base">
              <li><Link to="/course1" className="hover:underline">THE GOOD GUT PROGRAM</Link></li>
  <li><Link to="/course2" className="hover:underline">FOOD LOOK GOOD</Link></li>
  <li><Link to="/course3" className="hover:underline">START YOUR BUSINESS FROM HOME - NON VEG & VEG</Link></li>
  <li><Link to="/course4" className="hover:underline">START YOUR FOOD BUSINESS FROM HOME - VEG ONLY</Link></li>
  <li><Link to="/course5" className="hover:underline">IMMUNITY BOOSTER RECIPES</Link></li>
  <li><Link to="/course6" className="hover:underline">INDIA’S FAVOURITES: RESTAURANTS AND HOME STYLE DISHES</Link></li>
  <li><Link to="/course7" className="hover:underline">VEGETARIAN’S DELIGHT</Link></li>
  <li><Link to="/course8" className="hover:underline">GARNISHING & PLATING</Link></li>
</ul>
        </div>

        <div className="text-center md:text-left space-y-2">
          <h3 className="font-semibold">CONTACT</h3>

           <div className="flex items-start gap-2 justify-center md:justify-start">
             <MdLocationOn className="text-xl mt-1" />
             <p>
               Flavortheory Academy<br />
               1234, Olive Street,<br />
               Chennai – 021
             </p>
           </div>

           <div className="flex items-center gap-2 justify-center md:justify-start">
             <MdEmail className="text-xl" />
             <p>Info@Flavortheoryacademy.in</p>
           </div>

           <div className="flex items-center gap-2 justify-center md:justify-start">
             <FaPhoneAlt className="text-xl" />
             <p>044 – 987 6785 5677</p>
           </div>

           <div>
             <h4 className="font-semibold mt-2">FOLLOW US</h4>
             <div className="flex gap-4 justify-center md:justify-start mt-2 text-xl">
               <FaInstagram className="hover:text-black cursor-pointer" />
               <FaGoogle className="hover:text-black cursor-pointer" />
               <FaFacebookF className="hover:text-black cursor-pointer" />
               <FaYoutube className="hover:text-black cursor-pointer" />
             </div>
           </div>
         </div>


      </div>
    </footer>
  );
}



// import React, { useState } from "react";
// import {
//   FaPhoneAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaGoogle,
//   FaYoutube,
//   FaEnvelope,
// } from "react-icons/fa";
// import { MdEmail, MdLocationOn } from "react-icons/md";
// import logo1 from "../assets/images/logo_img1.png";
// import logo2 from "../assets/images/logo_img2.png";
// import { Link } from 'react-router-dom';

// export default function Footer() {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <footer className="bg-[#D17963] text-white px-6 md:px-10 py-10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm md:text-base lg:text-lg">
        
//         {/* Logo Section */}
//         <div className="flex justify-center md:justify-start lg:mt-10">
//           <img
//             src={hovered ? logo1 : logo2}
//             alt="Flavour Theory"
//             className="w-[350px] h-[20vh] transition duration-300"
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//           />
//         </div>

//         {/* Navigation */}
//         <div className="text-center md:text-left space-y-2 lg:ml-10">
//           <h3 className="font-semibold text-white text-base lg:text-lg">HOME</h3>
//           <ul className="space-y-1">
//             <li><Link to="/about" className="hover:text-[#C3413B] transition">ABOUT US</Link></li>
//             <li><Link to="/bakery" className="hover:text-[#C3413B] transition">PROGRAMS</Link></li>
//             <li><Link to="/courses" className="hover:text-[#C3413B] transition">COURSES</Link></li>
//           </ul>
//         </div>

//         {/* Courses */}
//         <div className="text-center md:text-left space-y-2 lg:-ml-[100px]">
//           <h3 className="font-semibold text-white text-base lg:text-lg">COURSES</h3>
//           <ul className="text-xs md:text-sm lg:text-base">
//             {[
//               "THE GOOD GUT PROGRAM",
//               "FOOD LOOK GOOD",
//               "START YOUR BUSINESS FROM HOME - NON VEG & VEG",
//               "START YOUR FOOD BUSINESS FROM HOME - VEG ONLY",
//               "IMMUNITY BOOSTER RECIPES",
//               "INDIA’S FAVOURITES: RESTAURANTS AND HOME STYLE DISHES",
//               "VEGETARIAN’S DELIGHT",
//               "GARNISHING & PLATING",
//             ].map((course, index) => (
//               <li key={index} className="hover:font-semibold">
//                 <Link to="/course-des" className="block hover:bg-[#f0e4d2] rounded-md px-1">
//                   {course}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div className="text-center md:text-left space-y-4 lg:ml-20">
//           <h3 className="font-semibold text-white text-base lg:text-lg">CONTACT</h3>

//           <div className="flex items-start gap-2 justify-center md:justify-start">
//             <MdLocationOn className="text-xl mt-1 shrink-0" />
//             <p>
//               Flavortheory Academy<br />
//               1234, Olive Street,<br />
//               Chennai – 021
//             </p>
//           </div>

//           <div className="flex items-center gap-2 justify-center md:justify-start">
//             <FaEnvelope className="text-lg text-white shrink-0" />
//             <p>Info@Flavortheoryacademy.in</p>
//           </div>

//           <div className="flex items-center gap-2 justify-center md:justify-start">
//             <FaPhoneAlt className="text-xl shrink-0" />
//             <p>044 – 987 6785 5677</p>
//           </div>

//           <div>
//             <h4 className="font-semibold mt-3">FOLLOW US</h4>
//             <div className="flex gap-4 justify-center md:justify-start mt-2 text-xl">
//               <FaInstagram className="hover:text-black cursor-pointer" />
//               <FaGoogle className="hover:text-black cursor-pointer" />
//               <FaFacebookF className="hover:text-black cursor-pointer" />
//               <FaYoutube className="hover:text-black cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
