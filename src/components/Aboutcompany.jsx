// AboutCompany.jsx
import React from "react";

export default function AboutCompany() {
  return (
    <section className="w-full py-16 bg-white text-black">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold tracking-wide flex items-center justify-center gap-4">
          <span>✦</span> ABOUT COMPANY <span>✦</span>
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left image */}
        <div className="flex flex-col items-center">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMCbfDMZTinaZiqqhGAPQcz93gA8RI87WZQdxI5=s1360-w1360-h1020-rw"
            alt="Genesis Virtue Studio Mobile"
            className="rounded-lg shadow-md w-[400px] object-cover"
          />
          <p className="mt-3 text-sm tracking-wide font-semibold">
            GENESIS VIRTUE STUDIO
          </p>
          <p className="text-xs text-gray-500">Genesis Virtue ,Noida</p>
        </div>

        {/* Right image */}
        <div className="flex flex-col items-center text-2xl leading-9 text-gray-500 roboto-condensed">
         Genesis Virtue is a creative technology studio that bridges design and innovation to deliver impactful digital experiences. With expertise in web development, UI/UX design, and cutting-edge digital solutions, we help brands transform their ideas into reality. Our focus lies in blending aesthetics with functionality—crafting solutions that not only look exceptional but also drive real results. At Genesis Virtue, we believe in listening first, designing second, and building lasting partnerships through collaboration and creativity
        </div>
      </div>
    </section>
  );
}
