import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "How do I find a recipe on your website?",
    answer: `You can easily find a recipe by using the search bar at the top of the page. Simply type in the dish you're looking for, and we’ll provide a list of relevant recipes. Alternatively, you can browse recipes by category (e.g., Quick Meals, Desserts, Vegan, etc.).`,
  },
  { question: "Can I save my favorite recipes?",
    answer: `Yes! If you have an account, you can save your favorite recipes to your profile for quick access later. Simply click the 'Save Recipe' button on any recipe page.`,
  },
  { question: "How do I submit my own recipes?",
    answer: `We’d love to see your recipes! To submit, you need to be logged in. Once logged in, you can navigate to the “Submit a Recipe” section and fill out the form with your recipe details, ingredients, and instructions.`,
   },
  { question: "Are the recipes suitable for beginners?",
    answer: `Absolutely! We offer a wide variety of recipes, many of which are beginner-friendly with simple ingredients and step-by-step instructions. We also provide cooking tips to help guide you along the way.`,
   },
  { question: "How do I know if a recipe is vegan, gluten-free, or dairy-free?",
    answer: `Each recipe includes dietary information and tags to indicate if it’s vegan, gluten-free, dairy-free, or suitable for other specific dietary preferences. You can also filter recipes by these categories when browsing.`,
   },
  { question: "Can I print recipes from the website?",
    answer: `Yes! On each recipe page, you’ll find a “Print Recipe” button that allows you to print the recipe directly. This will provide a clean, printer-friendly version of the recipe.`,
  },
  { question: "Do you offer video tutorials?" ,
    answer: `Some of our recipes come with video tutorials. You can watch the step-by-step cooking process in the video section of the recipe page. You’ll also find some general cooking tips and techniques in our blog section.`,
  },
  { question: "Can I share recipes with my friends and family?",
    answer: `Yes, you can! Each recipe page has share buttons to allow you to share recipes via social media, email, or messaging apps. Just click the 'Share' button and choose your preferred platform.`,
  },
  { question: "How can I contact you if I have questions or suggestions?",
    answer: `You can contact us through the “Contact Us” page or send us an email directly at [FLOVER THEORY@yourwebsite.com]. We’re happy to answer any questions and appreciate any feedback or recipe suggestions!`,
  },
  { question: "Is there a mobile app for this website?",
    answer: `At the moment, we only offer a website. However, our site is fully responsive and optimized for mobile devices, so you can easily browse recipes, watch videos, and save your favorites on your phone or tablet.`,
   },
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
              className="w-full flex items-center justify-between px-6 py-5 text-left text-lg sm:text-2xl font-semibold text-[#6C594A] focus:outline-none"
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
