"use client";
import React, { useState } from "react";
import { Star, ShoppingCart, Plus, Minus } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const product = {
  id: "1",
  name: "Gaming PC Ultra X",
  price: 1499,
  discountPrice: 1299,
  rating: 5,
  reviews_count: 120,
  shortDescription:
    "High-end gaming PC with Ryzen 9 CPU, RTX 4090 GPU, and 32GB DDR5 RAM.",
  longDescription: `
The Gaming PC Ultra X represents the pinnacle of modern gaming technology, built for enthusiasts who demand the ultimate experience. 
With the latest Ryzen 9 processor and NVIDIA RTX 4090 graphics card, it effortlessly handles AAA titles at maximum settings, delivering stunning visuals and fluid performance. The 32GB DDR5 memory ensures seamless multitasking, whether you’re streaming, gaming, or creating content. Storage is ample and lightning-fast with a 1TB NVMe SSD, enabling quick load times and a smooth workflow. 

This system is designed with longevity in mind, offering multiple expansion slots for future upgrades, and a robust 850W Gold-rated power supply to keep all components running efficiently. The advanced liquid cooling solution maintains optimal temperatures even under intense gaming sessions, reducing thermal throttling and preserving hardware lifespan.  

Connectivity options are plentiful with multiple USB ports, HDMI, DisplayPort, and Wi-Fi 6E, ensuring compatibility with a wide range of peripherals. The sleek chassis features tempered glass panels and RGB lighting to add a touch of aesthetic flair to your setup. Virtual Reality enthusiasts will appreciate its full VR support, while content creators benefit from the processing power for rendering and editing tasks. 

Every component has been carefully selected for reliability and performance. The motherboard offers high-end VRM phases for stable power delivery, and the modular cabling keeps the interior clean and airflow efficient. The included pre-installed software and drivers make setup a breeze, getting you into the action faster.  

In conclusion, the Gaming PC Ultra X is a premium machine designed for gamers who refuse to compromise on performance or style. Its combination of high-end components, advanced cooling, and future-proof design makes it an investment that will deliver top-tier experiences for years to come.
`,
  mainImage: "/images/image1.jpeg",
  images: [
    "/images/image1.jpeg",
    "/images/1.webp",
  ],
  video: "/videos/product-demo.mp4",
  relatedProducts: [
    { id: "2", name: "Gaming Laptop Pro", price: 1999, image: "/images/image1.jpeg" },
    { id: "3", name: "4K Gaming Monitor", price: 599, image: "/images/1.webp" },
  ],
};

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(product.mainImage);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const totalPrice = product.discountPrice * quantity;

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          {/* Zoomable Main Image */}
          <Zoom>
            <img
              src={currentImage}
              alt={product.name}
              className="rounded-2xl shadow-2xl w-full mb-4 cursor-zoom-in"
            />
          </Zoom>

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                className={`w-24 h-24 object-cover rounded-lg border ${
                  currentImage === img ? "border-green-600" : "border-gray-300"
                } cursor-pointer`}
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-extrabold">{product.name}</h1>
          <p className="text-gray-700">{product.shortDescription}</p>

          <div className="flex items-center gap-2 text-yellow-500">
            {Array.from({ length: product.rating }).map((_, i) => (
              <Star key={i} className="fill-yellow-400" />
            ))}
            <span className="text-gray-500 ml-2">({product.reviews_count} reviews)</span>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mt-4">
            <label className="font-semibold text-gray-700">Quantity:</label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={decrementQuantity}
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value) && value >= 1) setQuantity(value);
                }}
                className="w-16 text-center outline-none"
              />
              <button
                onClick={incrementQuantity}
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Price Display */}
          <div className="text-3xl font-bold text-green-600 mt-2">
            ${totalPrice.toLocaleString()}{" "}
            <span className="line-through text-gray-400 text-lg ml-2">
              ${(product.price * quantity).toLocaleString()}
            </span>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg w-max flex items-center mt-4">
            <ShoppingCart className="inline-block mr-2" />
            Add to Cart
          </button>
        </div>
      </section>

      {/* Long Description */}
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Product Description</h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          {product.longDescription.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      {/* Video Section */}
      {product.video && (
        <section className="max-w-6xl mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4">Product Video</h2>
          <video
            controls
            src={product.video}
            className="w-full rounded-2xl shadow-xl"
          />
        </section>
      )}

      {/* Related Products */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {product.relatedProducts.map((rp) => (
            <div
              key={rp.id}
              className="bg-white p-10 rounded-xl shadow hover:scale-105 transition"
            >
              <img
                src={rp.image}
                alt={rp.name}
                className="h-60 w-full object-cover rounded-lg mb-3"
              />
              <h3 className="font-bold mb-2">{rp.name}</h3>
              <p className="text-green-600 font-bold">${rp.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
