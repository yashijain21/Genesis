// Footer.jsx
import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Logo Left + Company Name Right */}
        <div className="flex items-center justify-between border-b border-gray-600 pb-6">
          <h2 className="text-2xl font-bold text-white">GV</h2>
          <h2 className="text-2xl font-bold text-white text-right leading-tight">
            GENESIS <br /> VIRTUE X
          </h2>
        </div>

        {/* Middle Row: Links + Services + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-600 py-8 mx-10">
         <div className="flex justify-between space-x-20">
             {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-white font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Workshops</a></li>
              <li><a href="#" className="hover:text-white">Resources</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Design</a></li>
              <li><a href="#" className="hover:text-white">Development</a></li>
              <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white">IT Consulting Services</a></li>
              <li><a href="#" className="hover:text-white">Dev Ops</a></li>
            </ul>
          </div>
         </div>
<div className="flex justify-end">
    
         {/* Newsletter */}
<div className="">
  <h3 className="text-white font-semibold mb-4">
    Stay Ahead with Genesis Virtue
  </h3>

  {/* Email Subscribe */}
  <div className="flex items-center w-full">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-grow p-3 rounded-l-md bg-gray-800 text-white outline-none"
    />
    <button className="bg-gray-600 hover:bg-gray-500 px-4 py-3 rounded-r-md text-white">
      Subscribe
    </button>
  </div>

  <p className="text-xs text-gray-500 mt-2 max-w-xs">
    By subscribing, you agree to our Privacy Policy. We respect your inbox and you can unsubscribe anytime.
  </p>

  {/* Social Icons */}
  <div className="flex gap-4 mt-4">
  <a href="https://www.facebook.com/GenesisVirtue/" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
  <a href="https://www.instagram.com/genesisvirtueindia" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
  <a href="https://www.linkedin.com/company/genesis-virtue" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
</div>
</div>

</div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © 2025 Genesis Virtue X | NOIDA | Remote
        </div>
      </div>
    </footer>
  );
}
