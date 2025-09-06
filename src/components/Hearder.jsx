import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="w-full bg-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo / Brand */}
        <div className="text-lg font-bold text-black">
          <a href="/">
            Genesis Virtue X
          </a>
        </div>

        {/* Navigation */}


<nav className="hidden md:flex space-x-6 text-sm font-medium text-black">
  <Link to="/about" className="hover:text-gray-700">
    About Us
  </Link>

  <Link to="/work" className="hover:text-gray-700">
    Our Work
  </Link>

  <Link to="/career" className="hover:text-gray-700">
    Career
  </Link>

  <Link to="/contact" className="hover:text-gray-700">
    Contact Us
  </Link>
</nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <button className="bg-black text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800">
            Chat With Us
          </button>
<div className="h-8 w-8 bg-white rounded-full flex items-center justify-center ">
             <EnvelopeIcon className="w-5 h-5 text-black cursor-pointer hover:text-gray-700" />
</div>
<div className="h-8 w-8 bg-white rounded-full flex items-center justify-center ">
          <PhoneIcon className="w-5 h-5 text-black cursor-pointer hover:text-gray-700" />
</div>
        </div>
      </div>
    </header>
  );
}
