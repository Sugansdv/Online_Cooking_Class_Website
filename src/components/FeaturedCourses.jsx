import React, { useEffect, useState } from "react";
import courseBg from "../assets/images/card.png";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "THE GOOD GUT PROGRAM",
    desc: "In Just 4 Weeks, Say Goodbye To Bloating, Constipation, Inflammation & Acidity. Plus Gain More Energy & Boost Immunity",
    offer: "Get 70% OFF",
    price: "₹ 4999 ₹ 1499",
  },
  {
    title: "LOOK GOOD COURSE",
    desc: "In Just 30 Days, Discover Time Tested & Science Backed Insights, Remedies And Recipes",
    offer: (
      <>
        New Launch Offer | <br />
        Get 88% OFF
      </>
    ),
    price: "₹ 42,995 ₹ 4,999",
  },
  {
    title: "Start Your Food Business From Home",
    desc: "Learn How To Start Your Food Business From Home, And Run A Successful Home",
    offer: (
      <>
        New Launch Offer | Get <br />
        70% OFF
      </>
    ),
    price: "₹ 4999 ₹ 1,499",
  },
];

export default function FeaturedCourses() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate("/course-des");
  };

  return (
    <div className="py-12 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
        FEATURED COURSES
      </h2>
      <div className="flex flex-wrap justify-center gap-20 max-w-7xl mx-auto">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={`w-full sm:w-[300px] md:w-[280px] lg:w-[350px] h-[560px] bg-no-repeat bg-cover bg-center rounded-[20px] shadow-lg p-6 flex flex-col justify-between text-white transform transition duration-700 ease-in-out
              ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
              hover:scale-105 hover:shadow-2xl`}
            style={{ backgroundImage: `url(${courseBg})` }}
          >
            <div className="pt-[100px] text-center">
              <h3 className="text-2xl font-bold mb-3 uppercase">
                {course.title}
              </h3>
              <p className="text-xl leading-relaxed px-4">{course.desc}</p>
              <p className="text-xl font-semibold mt-4">{course.offer}</p>
              <p className="text-xl font-semibold mt-1">{course.price}</p>
            </div>

            <button
              onClick={handleClick}
              className="mt-1 bg-[#C34F4F] hover:bg-[#D57A66] text-white text-[15px] font-bold py-2 px-6 rounded-full transition mx-auto"
            >
              LEARN MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
