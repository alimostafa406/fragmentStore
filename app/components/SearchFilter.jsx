"use client";
import React, { useState } from "react";

export default function SearchFilter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    console.log("Search:", search, "Category:", category, "Price:", priceRange);
  };

  return (
    <div className="max-w-6xl  mx-auto p-4 md:p-6 mt-14 bg-white rounded-xl shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="col-span-2  border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0060bf] w-full"
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="col-span-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0060bf] w-full"
        >
          <option value="">All Categories</option>
          <option value="pc">PC</option>
          <option value="laptop">Laptop</option>
          <option value="monitor">Monitor</option>
          <option value="accessories">Accessories</option>
        </select>

        {/* Price Range Filter */}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="col-span-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0060bf] w-full"
        >
          <option value="">All Prices</option>
          <option value="0-500">$0 - $500</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000-2000">$1000 - $2000</option>
          <option value="2000+">$2000+</option>
        </select>

        {/* Apply Button */}
        <button
          onClick={handleSearch}
          className="lg:col-span-1 col-span-2 align-middle bg-[#0060bf] hover:bg-[#004a8c] text-white font-bold py-3 px-6 rounded-lg shadow-md w-full"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
