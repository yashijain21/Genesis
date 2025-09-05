import React, { useEffect, useState } from "react";
import Header from "../components/Hearder";
import Footer from "../components/Footer";
export default function About() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // shrink effect (minimum scale = 0.4)
      const newScale = Math.max(0.4, 1 - scrollY / 600);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <>
  <Header/>
    <section className="bg-white text-gray-900 py-16 roboto-condensed">
      {/* Top Content */}
      <div className="text-center   mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
         GENESIS VIRTUE ✦ GENESIS VIRTUE ✦GENESIS VIRTUE
        </h1>
        <p className="text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
          Genesis Virtue Isn’t Just A Name—It’s A Promise. In Ancient Philosophy,
          “Virtue” Meant Excellence With Purpose. Today, We Shape Digital
          Experiences That Feel Genuine, Guided By Clarity, Creativity, And
          Humanity.
        </p>
        <a
          href="#about-genesis"
          className="mt-6 inline-block text-sm font-semibold text-gray-800 underline"
        >
          Learn More About Our Company
        </a>
      </div>

      {/* Scroll Shrink Image with Text */}
      <div className="relative flex flex-col justify-center items-center py-24 overflow-hidden">
        {/* Top Text */}
        <h2 className="absolute top-1/4 text-black text-5xl md:text-7xl font-bold opacity-30">
          The Virtues
        </h2>

        {/* Foreground Image */}
        <img
          src="https://wallpapers.com/images/hd/clock-on-pink-and-blue-picture-ne7nw3c14im8m40a.jpg"
          alt="Virtue"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.1s linear",
          }}
          className="relative z-10 rounded-lg shadow-lg w-[1000px] max-w-full"
        />

        {/* Bottom Text */}
        <h2 className="absolute bottom-1/4 text-black text-5xl md:text-7xl font-bold opacity-30">
          Of Design
        </h2>
      </div>

      {/* About Section */}
      <div
        id="about-genesis"
        className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
      >
        
     <div>
         <h3 className="text-2xl font-semibold">About Genesis Virtue</h3>
        <img src="https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg" alt="" />
     </div>
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every Pixel, Every Choice, Rooted In Purpose And Meaning.
          </p>
          <p className="text-gray-700 text-[24px] leading-[36px] mb-4">
            Empowering Brands To Connect Meaningfully. We Partner With 
            Leaders,
            Founders, And Change-Makers Ready To Elevate Their Digital Presence—
            From Brand Pivots To Product Launches To Holistic Redesigns.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Let’s Make Your Vision Visible And Unforgettable.
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-sm font-semibold text-gray-800 underline"
          >
            DISCOVER GENESIS VIRTUE →
          </a>
        </div>
      </div>
    </section>
   <Footer/> 
  </>
  );
}
