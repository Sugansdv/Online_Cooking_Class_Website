import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "How do I find a recipe on your website?",
    answer: `You can easily find a recipe by using the search bar at the top of the page. Simply type in the dish you're looking for, and we’ll provide a list of relevant recipes. Alternatively, you can browse recipes by category (e.g., Quick Meals, Desserts, Vegan, etc.).`,
  },
  { question: "Can I save my favorite recipes?" },
  { question: "How do I submit my own recipes?" },
  { question: "Are the recipes suitable for beginners?" },
  { question: "How do I know if a recipe is vegan, gluten-free, or dairy-free?" },
  { question: "Can I print recipes from the website?" },
  { question: "Do you offer video tutorials?" },
  { question: "Can I share recipes with my friends and family?" },
  { question: "How can I contact you if I have questions or suggestions?" },
  { question: "Is there a mobile app for this website?" },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3] py-12 px-4 sm:px-6 lg:px-24">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">FAQ’S</h1>
      <div className="space-y-4 max-w-6xl mx-auto ">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-300 overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left text-lg sm:text-2xl font-semibold text-gray-700 focus:outline-none"
            >
              <span>{index + 1}. {faq.question}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && faq.answer && (
              <div className="px-6 pb-6 text-[#222] text-2xl font-[400] font-mono leading-6">
                • {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
