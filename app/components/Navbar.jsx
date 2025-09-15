"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, User, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [shopOpenMobile, setShopOpenMobile] = useState(false);
  const [shopOpenDesktop, setShopOpenDesktop] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Shop",
      subLinks: [
        { name: "Laptops", href: "/shop/laptops" },
        { name: "Accessories", href: "/shop/accessories" },
        { name: "Gaming", href: "/shop/gaming" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const mainColor = "#0060c0";

  return (
    <nav className="w-full bg-white shadow-md  sticky top-0 z-50">
      <div className="flex items-center justify-between h-16 px-4 lg:px-20 ">
        {/* Burger menu left on mobile */}
        <button
          className="md:hidden"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo center on mobile */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
          <Link
            href="/"
            className="text-2xl font-bold select-none"
            style={{ color: mainColor }}
          >
            Fragment Store
          </Link>
        </div>

        {/* Cart + User right on mobile */}
        <div className="flex items-center gap-3 md:hidden">
                    <button className="relative">
            <ShoppingCart className="w-6 h-6 font-bold" />
            <span className="absolute -top-2 -right-2 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full" style={{ backgroundColor: mainColor }}>
              3
            </span>
          </button>
          <User className="w-6 h-6"  />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) =>
            link.subLinks ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setShopOpenDesktop(true)}
                onMouseLeave={() => setShopOpenDesktop(false)}
              >
                <button className="flex items-center hover:text-blue-600 font-bold">
                  {link.name}{" "}
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform ${shopOpenDesktop ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`absolute left-0 w-48 bg-white border border-gray-300 rounded-md shadow-lg 
                            transition-all duration-150 ease-out
                            ${shopOpenDesktop ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 translate-y-1 pointer-events-none"}`}
                >
                  {link.subLinks.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.href}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={idx}
                href={link.href}
                className="hover:text-blue-600 font-bold"
                
              >
                {link.name}
              </Link>
            )
          )}

          {/* Cart */}
          <button className="relative">
            <ShoppingCart className="w-6 h-6 font-bold" />
            <span className="absolute -top-2 -right-2 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full" style={{ backgroundColor: mainColor }}>
              3
            </span>
          </button>

          {/* User Icon بدل Login/Signup */}
          <User className="w-6 h-6 font-extrabold"  />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          {/* Sidebar */}
          <div className="relative w-64 bg-white shadow-md h-full p-4 overflow-y-auto">
            <button
              className="mb-4"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            {navLinks.map((link, idx) =>
              link.subLinks ? (
                <div key={idx}>
                  <button
                    className="w-full flex justify-between items-center px-2 py-2 text-left hover:bg-gray-100"
                    onClick={() => setShopOpenMobile(!shopOpenMobile)}
                  >
                    {link.name}{" "}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        shopOpenMobile ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {shopOpenMobile && (
                    <div className="pl-4">
                      {link.subLinks.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.href}
                          className="block px-2 py-2 hover:bg-gray-100"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  href={link.href}
                  className="block px-2 py-2 hover:bg-gray-100"
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="mt-4 border-t pt-2 flex flex-col gap-2">
              <Link
                href="/login"
                className="px-3 py-2 border rounded text-center"
                style={{ borderColor: mainColor, color: mainColor }}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-3 py-2 rounded text-center text-white"
                style={{ backgroundColor: mainColor }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
