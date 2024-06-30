// components/Navbar.jsx
import React, { useState } from "react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy text-cream font-handwritten p-2">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center flex-shrink-0 mr-6">
            <h2 className="text-xl">BUY SELL</h2>
            <h2 className="text-2xl">AND</h2>
            <h2 className="text-xl">SHARE</h2>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 border rounded text-[#f0ebe5] border-[#f0ebe5] hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          {/* Nav items */}
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col lg:flex-row justify-center items-center text-sm lg:flex-grow lg:ml-80 pb-3">
              {[
                "Home",
                "Deals",
                "Offers",
                "Rent",
                "Foodies",
                "Clothes",
                "Services",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative mt-4 lg:mt-0 lg:mr-4">
              <input
                type="search"
                className="bg-[#1e2832] text-[#f0ebe5] border border-[#f0ebe5] rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#f0ebe5]"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-4"
              >
                <svg
                  className="h-6 w-6 fill-current text-[#f0ebe5] hidden md:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </div>

            {/* Buttons */}
            <div className="mt-5 md:mt-0">
              <Button text={"Share"} />
              <Button text={"Support"} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
