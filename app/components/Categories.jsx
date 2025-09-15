"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const baseCategories = [
    { id: 1, name: "Routers", image: "images/ps5cat.webp" },
    { id: 2, name: "Mesh Systems", image: "images/ps5cat.webp" },
    { id: 3, name: "WiFi Extenders", image: "images/ps5cat.webp" },
    { id: 4, name: "USB Adapters", image: "images/ps5cat.webp" },
    { id: 5, name: "Smart Home", image: "images/ps5cat.webp" },
    { id: 6, name: "Network", image: "images/ps5cat.webp" },
  ];

  // نسخ لتسهيل التمرير اللامتناهي
  const categories = [...baseCategories, ...baseCategories, ...baseCategories];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(1);
      else if (width < 768) setItemsPerPage(2);
      else if (width < 1024) setItemsPerPage(3);
      else if (width < 1280) setItemsPerPage(4);
      else setItemsPerPage(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(baseCategories.length);
  }, [itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= categories.length - itemsPerPage) return baseCategories.length;
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) return baseCategories.length * 2 - itemsPerPage;
      return newIndex;
    });
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-12 sm:w-16 h-1 rounded bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Categories</h2>
        </div>

        <div className="relative">
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-200 bg-white shadow-lg flex items-center justify-center hover:border-blue-400 hover:bg-blue-50"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-200 bg-white shadow-lg flex items-center justify-center hover:border-blue-400 hover:bg-blue-50"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </button>

          {/* Categories */}
          <div className="overflow-hidden mx-6 sm:mx-8 lg:mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {categories.map((cat, index) => (
                <div
                  key={`${cat.id}-${Math.floor(index / baseCategories.length)}`}
                  className={`flex-none px-2 sm:px-3 ${
                    itemsPerPage === 1 ? "w-full" :
                    itemsPerPage === 2 ? "w-1/2" :
                    itemsPerPage === 3 ? "w-1/3" :
                    itemsPerPage === 4 ? "w-1/4" : "w-1/5"
                  }`}
                >
                  <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full sm:h-60 md:h-40 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black opacity-35">
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-extrabold text-2xl">{cat.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CategoriesCarousel;
