"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

const HeroHeader = () => {
  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full h-[87vh] lg:h-[70vh] grid grid-cols-1 md:grid-cols-2">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-start px-8 md:px-16 bg-[#0060bf] text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Fragment <span className="text-white">Store</span>
        </h1>
        <p className="text-lg md:text-xl font-bold mb-6 max-w-md">
          Your best place to find gaming & computer accessories online.
        </p>

        {/* Search Box with Button */}
        <div className=" w-full max-w-lg rounded-lg p-2">
          <div className="flex">
            {/* Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 bg-white rounded-l-lg focus:ring-2 focus:ring-[#0060bf] focus:border-transparent"
              />
            </div>
            {/* Button */}
            <button className="bg-blue-800 hover:bg-blue-900 border-black text-white px-5 py-2 rounded-r-lg font-semibold flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-6 bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-lg shadow-md">
          Shop Now
        </button>
      </div>

      {/* Right Side - Image Slider */}
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt="hero"
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>
    </section>
  );
};

export default HeroHeader;
