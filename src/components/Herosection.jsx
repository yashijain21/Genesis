import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import vdo1 from "../assets/herovdo1.mp4";
import vdo2 from "../assets/Creative.mp4";
import Create from "../assets/Create.png";
import ELEVATE from "../assets/ELEVATE.png";
import Influence from "../assets/Influence.png";
import Design from "../assets/Design.png";
import Market from "../assets/Market.png";

const HeroSection = () => {
  // Left rotating words
  const leftWords = [
    { src: Create },
    { src: ELEVATE },
    { src: Influence },
    { src: Design },
    { src: Market },
  ];

  // Right rotating words
  const rightWords = [
    { text: "WIN", color: "#F20574" },
    { text: "WIN", color: "#ffdd00" },
    { text: "WIN", color: "#f25c05" },
    { text: "WIN", color: "#28a691" },
    { text: "WIN", color: "#8a38f5" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % leftWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-based animation
  const { scrollYProgress } = useScroll();

  const rawWidth = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [400, 800, 1000, 600, 400, 100]
  );
  const rawHeight = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [200, 400, 600, 360, 240, 50]
  );
  const rawX = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, -150]);
  const rawY = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 300]);

  const width = useSpring(rawWidth, { stiffness: 80, damping: 20 });
  const height = useSpring(rawHeight, { stiffness: 80, damping: 20 });
  const x = useSpring(rawX, { stiffness: 80, damping: 20 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  return (
    <>
      {/* HERO TEXT */}
      <section className="text-center py-20 px-6">
        <h1 className="text-2xl md:text-3xl font-semibold flex justify-center gap-2">
          WE
          <span className="relative inline-block min-w-[180px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={leftWords[index].src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-14 object-contain w-[150px] h-[150px]"
              />
            </AnimatePresence>
          </span>
        </h1>

        <h1 className="text-4xl md:text-6xl font-bold mt-2 flex justify-center gap-2">
          WE HELP YOUR BRAND{" "}
          <span className="relative inline-block min-w-[160px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`absolute left-0 right-0`}
                style={{ color: rightWords[index].color }}
              >
                {rightWords[index].text}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Genesis Virtue® is a user-focused design and marketing agency that
          builds intuitive websites, engaging interfaces, and impactful digital
          strategies.
        </p>
      </section>

 
<section className="relative h-[150vh]">
  <motion.div
    className="mx-auto overflow-hidden rounded-xl shadow-lg bg-black"
    style={{
      width,
      height,
      x,
      y,
      position: scrollYProgress.get() < 1 ? "sticky" : "fixed",
      top: "100px",
    }}
  >
    <video
      src={vdo1}
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    />
  </motion.div>
</section>


      {/* GROW YOUR BRAND */}
      <section className="px-6 py-16 relative h-[400px] flex items-center ">
        <div className="text-3xl md:text-5xl font-bold uppercase flex items-center">
          GROW YOUR <br />
          BRAND WITH US
        </div>
      </section>

      {/* SECOND VIDEO AND CONTENT */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 mx-10">
        <video
          src={vdo2}
          autoPlay
          loop
          muted
          className="rounded-lg shadow-lg h-[640px] w-[840px] object-cover"
        ></video>

        <div className="ml-20 h-[720px] w-full">
          <h1 className="text-2xl md:text-4xl font-bold mt-2 roboto-condensed ">
            Creative Meets Functional
          </h1>
          <h2 className="text-lg md:text-2xl font-bold mt-4 text-black text-center ml-[25%] roboto-condensed">
            That’s Where We Work
          </h2>
          <h3 className="text-md md:text-lg mt-6 text-black font-bold max-w-3xl mx-auto roboto-condensed">
            We specialize in designing purposeful digital experiences <br /> That
            balance beauty with performance
          </h3>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-2xl">
            At Genesis Virtue, we believe that design is more than visuals—it’s
            about building meaningful digital experiences that connect people
            with ideas. As a UI/UX and web design studio, we combine
            human-centered thinking with modern technology to craft websites and
            products that are intuitive, functional, and aesthetically refined.
            <div className="mt-10" />
            Our process is guided by empathy for the user, strategic insight for
            businesses, and a relentless pursuit of simplicity. From research and
            wireframes to high-fidelity design and prototyping, we deliver
            solutions that not only solve problems but also inspire trust,
            loyalty, and long-term growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;