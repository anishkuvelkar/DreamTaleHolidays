import React, { useState, useEffect } from "react";
import homepage1 from "../images/homepage1.jpg";
import homepage2 from "../images/homepage2.jpg";
import homepage3 from "../images/homepage3.jpg";

const HomePage = () => {
  const images = [homepage1, homepage2, homepage3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const offerings = [
    "Personalized Travel Planning",
    "Exclusive Deals & Discounts",
    "24/7 Customer Support",
    "Eco-Friendly Trips",
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
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Unique Offerings */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Unique Offerings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {offerings.map((offer, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {offer}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="py-16 px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Trending Destinations</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            See All
          </button>
        </div>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {trendingDestinations.map((dest, index) => (
            <div key={index} className="min-w-[250px] flex-shrink-0">
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-48 object-cover rounded-lg shadow"
              />
              <div className="bg-white p-4 rounded-b-lg shadow mt-2">
                <h3 className="text-xl font-semibold text-gray-800">{dest.name}</h3>
                <p className="text-gray-600 mt-1">
                  Explore the beauty and attractions of {dest.name}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
