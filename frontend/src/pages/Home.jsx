import React, { useState, useEffect } from "react";
import { FaClock, FaUserShield, FaMapMarkedAlt, FaSmile } from "react-icons/fa";
import homepage1 from "../images/homepage1.jpg";
import homepage2 from "../images/homepage2.jpg";
import homepage3 from "../images/homepage3.jpg";

const HomePage = () => {
  const images = [homepage1, homepage2, homepage3];
  const texts = [
    "Explore the wonders of the world",
    "Adventure awaits your discovery",
    "Travel and create unforgettable memories",
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setShowText(false);
      setTimeout(() => setShowText(true), 800);
    }, 6000); // slower transition
    setShowText(true);
    return () => clearInterval(interval);
  }, [images.length]);

  const offerings = [
    {
      title: "Expert Guidance",
      paragraph:
        "Access to knowledgeable travel agents providing personalized insights for your trip.",
      icon: <FaSmile className="text-4xl text-white mb-3" />,
    },
    {
      title: "Time Efficiency",
      paragraph:
        "Save time by letting professionals handle itinerary planning and bookings.",
      icon: <FaClock className="text-4xl text-white mb-3" />,
    },
    {
      title: "Stress Reduction",
      paragraph:
        "Minimize stress associated with trip planning, especially for complex itineraries.",
      icon: <FaMapMarkedAlt className="text-4xl text-white mb-3" />,
    },
    {
      title: "Safety and Security",
      paragraph:
        "Benefit from enhanced safety measures and emergency support during your travels.",
      icon: <FaUserShield className="text-4xl text-white mb-3" />,
    },
  ];

  const trendingDestinations = [
    { img: homepage1, name: "Paris" },
    { img: homepage2, name: "Bali" },
    { img: homepage3, name: "New York" },
    { img: homepage1, name: "Tokyo" },
    { img: homepage2, name: "Sydney" },
  ];

  return (
    <div>
      {/* Full-Screen Top Image Slider */}
      <div className="w-full h-screen relative overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-[3000ms] ease-in-out transform ${
              index === currentImage ? "opacity-100 scale-110" : "opacity-0 scale-100"
            }`}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover brightness-75"
            />
            {index === currentImage && showText && (
              <div className="absolute top-1/4 w-full text-center text-white text-4xl font-bold">
                {texts[index].split(" ").map((word, i, arr) => {
                  const isLast = i === arr.length - 1;
                  return (
                    <span key={i} className="relative inline-block mx-1">
                      {word}{" "}
                      {isLast && (
                        <svg
                          className="absolute left-0 -bottom-2 w-full h-3"
                          viewBox="0 0 100 10"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0,5 C25,0 75,10 100,5"
                            stroke="#FACC15"
                            strokeWidth="4"
                            fill="transparent"
                            strokeLinecap="round"
                            strokeDasharray="150"
                            strokeDashoffset="150"
                            className="animate-draw-curve"
                          />
                        </svg>
                      )}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Wave Transition to Offerings */}
      <div className="relative -mt-20">
        <svg
          className="w-full h-20"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,100 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Enhanced Offerings Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
        <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">
          Our Unique Offerings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {offerings.map((offer, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-400/20 p-4 rounded-full mb-4">{offer.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{offer.title}</h3>
                <p className="text-white text-opacity-90">{offer.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wave Transition to Trending Destinations */}
      <div className="relative -mt-20">
        <svg
          className="w-full h-20 rotate-180"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,100 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* Trending Destinations */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Trending Destinations</h2>
          <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            See All
          </button>
        </div>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {trendingDestinations.map((dest, index) => (
            <div
              key={index}
              className="min-w-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-4 rounded-b-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">{dest.name}</h3>
                <p className="text-gray-600 mt-1">
                  Explore the beauty and attractions of {dest.name}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>
        {`
          @keyframes draw-curve {
            to {
              stroke-dashoffset: 0;
            }
          }
          .animate-draw-curve {
            animation: draw-curve 1s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
