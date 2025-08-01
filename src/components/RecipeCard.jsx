import React, { useRef, useState } from "react";
import noodlesImg from "../assets/images/noodlesImg.png";
import recipeVideo from "../assets/videos/vegHakkaNoodles.mp4";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function RecipeCard() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className=" p-6 sm:p-8 md:p-12 rounded-2xl w-full max-w-7xl mx-auto">
      {/* Video/Image Section */}
      <div className="relative rounded-xl overflow-hidden aspect-video">
        {!playing ? (
          <>
            <img
              src={noodlesImg}
              alt="Veg Hakka Noodles"
              className="w-full h-full object-cover"
            />
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition"
            >
              <PlayCircleIcon className="w-20 h-20 text-white" />
            </button>
          </>
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full"
            controls
            onEnded={() => setPlaying(false)}
          >
            <source src={recipeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Recipe Info */}
      <div className="mt-8 text-[#1a1a1a] text-left">
        <h2 className="text-sm md:text-2xl lg:text-4xl font-bold mb-4">
          Veg Hakka Noodles (Indian–Chinese)
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-sm md:text-xl lg:text-3xl">Ingredients:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-basez lg:text-2xl  font-semibold ">
            <li>200g Hakka Noodles</li>
            <li>2 Tbsp Oil</li>
            <li>1 Tbsp Soy Sauce</li>
            <li>1 Tsp Vinegar</li>
            <li>½ Tsp Chili Sauce</li>
            <li>1 Tsp Garlic (Finely Chopped)</li>
            <li>1 Onion (Sliced)</li>
            <li>1 Cup Julienned Veggies (Carrot, Bell Pepper, Cabbage, Beans)</li>
            <li>Salt & Pepper</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm md:text-base lg:text-3xl font-bold mb-2">Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm md:text-base lg:text-2xl  font-semibold ">
            <li>Boil noodles, rinse with cold water, toss in a bit of oil.</li>
            <li>Heat oil in a wok, sauté garlic and onions.</li>
            <li>Add all veggies and stir-fry on high heat for 2–3 mins.</li>
            <li>Add noodles, soy sauce, vinegar, chili sauce, salt & pepper.</li>
            <li>Toss on high flame until well combined. Serve hot.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
