"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState(new Set());
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const baseProducts = [
    {
      id: 1,
      name: "Cudy AC1200 Dual Band Mesh WiFi System (1-Pack)",
      brand: "CUDY",
      price: "$25.00",
      originalPrice: "$35.00",
      offer: "30% OFF",
      hasOffer: true,
      image: "images/image1.jpeg",
      description: "Bring fast and secure Wi-Fi to your home with the Cudy AC1200 Dual Band Mesh WiFi System (1-Pack)."
    },
    {
      id: 2,
      name: "Cudy AC1200 Dual Band Mesh WiFi System (3-Pack)",
      brand: "CUDY", 
      price: "$57.00",
      originalPrice: "$75.00",
      offer: "25% OFF",
      hasOffer: true,
      image: "images/1.webp",
      description: "Expand your wireless coverage with the Cudy AC1200 Dual Band Mesh WiFi System (3-Pack)."
    },
    {
      id: 3,
      name: "Cudy AX1500 Dual-Band Mesh Wi-Fi 6 System (1-Pack)",
      brand: "CUDY",
      price: "$28.00",
      originalPrice: null,
      offer: null,
      hasOffer: false,
      image: "images/image1.jpeg",
      description: "Bring reliable Wi-Fi 6 performance to your home with the Cudy AX1500 Dual-Band Mesh Wi-Fi 6 System (1-Pack)."
    },
    {
      id: 4,
      name: "Cudy AX1500 Dual-Band Mesh Wi-Fi 6 System (2-Pack)",
      brand: "CUDY",
      price: "$49.99",
      originalPrice: "$65.00",
      offer: "20% OFF",
      hasOffer: true,
      image: "images/1.webp", 
      description: "The Cudy AX1500 Dual-Band Mesh Wi-Fi 6 System (2-Pack) brings fast and reliable whole-home coverage."
    },
    {
      id: 5,
      name: "Cudy AX3000 Dual-Band Wi-Fi 6 Mesh System (2-Pack)",
      brand: "CUDY",
      price: "$62.00",
      originalPrice: null,
      offer: null,
      hasOffer: false,
      image: "images/image1.jpeg",
      description: "Enjoy seamless whole-home connectivity with the Cudy AX3000 Dual-Band Wi-Fi 6 Mesh System (2-Pack)."
    }
  ];

  const products = [...baseProducts, ...baseProducts, ...baseProducts];

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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(baseProducts.length);
  }, [itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= products.length - itemsPerPage) return baseProducts.length;
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) return baseProducts.length * 2 - itemsPerPage;
      return newIndex;
    });
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      const baseId = ((productId - 1) % baseProducts.length) + 1;
      if (newFavorites.has(baseId)) newFavorites.delete(baseId);
      else newFavorites.add(baseId);
      return newFavorites;
    });
  };

  const isFavorite = (productId) => {
    const baseId = ((productId - 1) % baseProducts.length) + 1;
    return favorites.has(baseId);
  };

  return (
    <div className="w-full mt-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-12 sm:w-16 h-1 rounded bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">New Arrivals</h2>
        </div>

        {/* Carousel */}
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

          {/* Products */}
          <div className="overflow-hidden mx-6 sm:mx-8 lg:mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {products.map((product, index) => (
                <div 
                  key={`${product.id}-${Math.floor(index / baseProducts.length)}`}
                  className={`flex-none px-10 sm:px-3 ${
                    itemsPerPage === 1 ? 'w-full' :
                    itemsPerPage === 2 ? 'w-1/2' :
                    itemsPerPage === 3 ? 'w-1/3' :
                    itemsPerPage === 4 ? 'w-1/4' : 'w-1/5'
                  }`}
                >
                  <div className="bg-white rounded-lg w-full border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden h-full">
                    
                                        {/* Image */}
                     <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-white">
                    {product.hasOffer && (
                        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        {product.offer}
                        </div>
                    )}

                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />

                    <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-2 sm:top-3 right-2 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                        <Heart
                        className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-200 ${
                            isFavorite(product.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                        />
                    </button>
                    </div>


                    {/* Info */}
                    <div className="p-3 sm:p-4 lg:p-5">
                      <div className="text-xs text-blue-600 font-medium mb-1 sm:mb-2 tracking-wide uppercase">
                        {product.brand}
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 mb-2 sm:mb-3 line-clamp-2 leading-5">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 leading-4 hidden sm:block">
                        {product.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline justify-between mt-2">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-base sm:text-lg font-semibold text-gray-900">
                            {product.price}
                          </span>
                          {product.hasOffer && product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        {product.hasOffer && (
                          <span className="text-xs text-red-600 font-medium bg-red-50 px-2 py-1 rounded">
                            SAVE
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 items-center space-x-4">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-300"></div>
            </div>
            <span className="text-sm text-gray-500">Keep scrolling for more products</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
