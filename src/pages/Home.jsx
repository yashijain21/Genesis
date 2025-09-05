// HomeHero.jsx
import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Hearder";
import Herosection from "../components/Herosection";
import Service from "../components/Service";
import DrivingBrandsSection from "../components/DrivingBrands";
import OurWork from "../components/Ourwork";
import Highlights from "../components/Highlights";
import AboutCompany from "../components/Aboutcompany";
import Reviews from "../components/Reviews";

import Footer from "../components/Footer";
const HomeHero = () => {
    const goToNext = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <Herosection />
      <Service />
      <DrivingBrandsSection />

     <OurWork onFinished={goToNext} />
      <Highlights />
      <AboutCompany/>
      <Reviews/>
      <Footer />
    </>
  );
};

export default HomeHero;
