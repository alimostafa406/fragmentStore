"use client";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";

const ProductGrid = () => {
  // بيانات منتجات تجريبية
  const products = [
    { id: 1, name: "Gaming Laptop", description: "High performance gaming laptop with RGB keyboard.", price: "$1200", originalPrice: "$1500", hasOffer: true, image: "images/1.webp" },
    { id: 2, name: "Mechanical Keyboard", description: "RGB backlit mechanical keyboard for gamers.", price: "$150", originalPrice: "$200", hasOffer: true, image: "images/image1.jpeg" },
    { id: 3, name: "Gaming Mouse", description: "High DPI precision gaming mouse.", price: "$60", hasOffer: false, image: "images/1.webp" },
    { id: 4, name: "Gaming Chair", description: "Comfortable ergonomic gaming chair.", price: "$300", image: "images/image1.jpeg", hasOffer: false },
    { id: 5, name: "4K Monitor", description: "Crystal clear 27-inch 4K monitor.", price: "$450", originalPrice: "$600", hasOffer: true, image: "images/1.webp" },
    { id: 6, name: "Headset", description: "Noise-cancelling gaming headset.", price: "$80", hasOffer: false, image: "images/image1.jpeg" },
    { id: 7, name: "Graphics Card", description: "Latest-gen high performance GPU.", price: "$900", image: "images/1.webp", hasOffer: false },
    { id: 8, name: "Processor", description: "Powerful multi-core CPU.", price: "$500", originalPrice: "$650", hasOffer: true, image: "images/image1.jpeg" },
    { id: 9, name: "RAM 16GB", description: "High-speed DDR4 RAM.", price: "$120", hasOffer: false, image: "images/1.webp" },
    { id: 10, name: "SSD 1TB", description: "Fast NVMe storage drive.", price: "$130", hasOffer: false, image: "images/image1.jpeg" },
    { id: 11, name: "Cooling Fan", description: "RGB CPU cooling fan.", price: "$40", hasOffer: false, image: "images/1.webp" },
    { id: 12, name: "Motherboard", description: "Gaming motherboard ATX.", price: "$250", image: "images/image1.jpeg", hasOffer: false },
    { id: 13, name: "Power Supply", description: "750W gaming PSU.", price: "$110", hasOffer: false, image: "images/1.webp" },
    { id: 14, name: "Webcam", description: "HD streaming webcam.", price: "$70", hasOffer: false, image: "images/image1.jpeg" },
    { id: 15, name: "Microphone", description: "Studio-quality USB mic.", price: "$90", hasOffer: false, image: "images/1.webp" },
    { id: 16, name: "Controller", description: "Wireless gaming controller.", price: "$55", hasOffer: false, image: "images/image1.jpeg" },
    { id: 17, name: "VR Headset", description: "Immersive VR gaming headset.", price: "$600", originalPrice: "$800", hasOffer: true, image: "images/1.webp" },
    { id: 18, name: "Desk Lamp", description: "RGB smart desk lamp.", price: "$45", hasOffer: false, image: "images/image1.jpeg" },
    { id: 19, name: "Speakers", description: "High-quality surround sound.", price: "$150", hasOffer: false, image: "images/1.webp" },
    { id: 20, name: "External HDD", description: "2TB external hard drive.", price: "$95", hasOffer: false, image: "images/image1.jpeg" },
  ];

  const [visible, setVisible] = useState(8);
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  const isFavorite = (id) => favorites.has(id);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      visible < products.length
    ) {
      setVisible((prev) => prev + 4);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-12 sm:w-16 h-1 rounded bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">All Product</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, visible).map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-white">
                  {product.hasOffer && (
                    <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      SALE
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // منع انتقال الصفحة عند الضغط على القلب
                      toggleFavorite(product.id);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors duration-200 ${
                        isFavorite(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400 hover:text-red-500"
                      }`}
                    />
                  </button>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline justify-between mt-2">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-lg font-semibold text-gray-900">
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
            </Link>
          ))}
        </div>

        {/* Loading */}
        {visible < products.length && (
          <div className="text-center mt-6 text-gray-500">Loading more...</div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
