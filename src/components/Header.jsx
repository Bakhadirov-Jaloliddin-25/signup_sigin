import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "About", "Services", "Pricing", "Contact"];

  return (
    <div className="w-full sticky top-0 z-50 bg-gray-900 shadow-lg opacity-95">
      <nav className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="bg-gray-200 p-2 rounded-full">
            <img
              src="https://montikea.com/images/partials/cart.svg"
              className="h-8 w-8"
              alt="Logo"
            />
          </div>
          <span className="text-2xl font-bold text-white">ShopEase</span>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative text-lg font-medium ${
                active === item
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              } transition`}
            >
              {item}
              {active === item && (
                <span className="absolute left-0 bottom-[-10px] h-[3px] w-full bg-white rounded-full transition-all duration-300"></span>
              )}
            </button>
          ))}
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 6h18M3 12h18m-6 6h6"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Header;