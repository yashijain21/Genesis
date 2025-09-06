import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import dragArrow from "../assets/arrow.lottie";
import workspace1 from "../assets/workspace1.jpg";
import workspace2 from "../assets/workspace2.jpg";
import workspace3 from "../assets/workspace3.jpg";
import career from "../assets/career.png";
import Header from "./Hearder";
import Footer from "./Footer";
// Card Data
const cultureCodes = [
  { id: 1, title: " DESIGN WITH PURPOSE", desc: "We Don’t Chase Trends—We Design With Intention And Clarity." },
  { id: 2, title: " WE BEFORE ME", desc: "Great Design Emerges When Ideas Come Together With Respect And Trust." },
  { id: 3, title: " PRECISION WITH PURPOSE", desc: "Every Pixel And Decision Has Meaning And Impact." },
  { id: 4, title: " CANDID AND CONSTRUCTIVE", desc: "Feedback That Builds, Delivered With Clarity And Care." },
  { id: 5, title: " OPTIMISM FUELS CREATIVITY", desc: "We Believe Positivity Inspires Bold Ideas." },
];

const rotations = [10, -8, 5, -12, 7];

export default function CultureCode() {
  const [cards, setCards] = useState(cultureCodes);
  const [showFinalText, setShowFinalText] = useState(false);

  const handleDragEnd = (info, index) => {
    if (info.offset.y < -100) {
      setCards((prev) => prev.filter((_, i) => i !== index));
    }
  };

  useEffect(() => {
    if (cards.length === 0) {
      setTimeout(() => setShowFinalText(true), 300);
    }
  }, [cards]);

  return (
    <>

    <section className="relative min-h-screen bg-white text-black flex flex-col justify-center items-center overflow-hidden">
      
      {/* Instruction with arrow */}
      <div className="absolute top-10 flex flex-col items-center z-10">
        <Player src={dragArrow} autoplay loop style={{ width: 80, height: 80 }} />
        <p className="mt-2 text-black font-semibold text-lg text-center">
          Drag the card to see more
        </p>
      </div>

      {/* Background text */}
      <motion.h1
        className="absolute text-[3rem] md:text-[5rem] font-bold tracking-wide text-center pointer-events-none z-0"
        initial={{ scale: 1, color: "#d1d5db" }}
        animate={showFinalText ? { scale: 1.3, color: "#000" } : { scale: 1, color: "#d1d5db" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        ✦ OUR CULTURE CODE ✦
      </motion.h1>

      {/* Card stack */}
      <div className="relative w-full flex justify-center items-center mt-36">
        <AnimatePresence>
          {cards.map((code, index) => (
            <motion.div
              key={code.title}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(_, info) => handleDragEnd(info, index)}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1 - index * 0.03,
                rotate: rotations[index % rotations.length],
              }}
              exit={{ y: -300, opacity: 0, rotate: -15 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="absolute bg-black text-white rounded-2xl shadow-2xl w-64 h-72 p-8 text-center border cursor-grab active:cursor-grabbing"
              style={{ zIndex: cards.length - index }}
            >
              <h1 className="text-xl font-bold mb-4">0{code.id}.</h1>
              <h2 className="text-xl font-bold mb-4">{code.title}</h2>
              <p className="text-gray-300 text-sm">{code.desc}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </section>
    
      {/* ---------- Extra Sections ---------- */}

      {/* Our Workspaces */}
      <section className="w-full py-16 px-6 bg-gray-50 ">
        <h2 className="text-5xl font-bold mb-6">Our Workspaces</h2>
        <hr />
    <div className="overflow-x-auto py-6  scrollbar-hide ">
  <div className="flex space-x-6">
    <img
      src={workspace1}
      alt="Workspace 1"
      className="rounded-lg shadow-md flex-shrink-0"
      width="352px"
      height="563px"
    />

    <img
      src={workspace2}
      alt="Workspace 2"
      className="rounded-lg shadow-md flex-shrink-0"
      width="641px"
      height="563px"
    />

    <img
      src={workspace3}
      alt="Workspace 3"
      className="rounded-lg shadow-md flex-shrink-0"
      width="352px"
      height="563px"
    />
  </div>
</div>

      </section>

{/* Meet The Makers */}
<section className="w-full py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* Left Text Section */}
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6">Meet The Makers</h2>
      <p className="max-w-md text-gray-600">
        Different Minds, One Vision: Making Digital Experiences That Matter.  
        At Genesis Virtue, Our Team Blends Design, Strategy, And Empathy  
        To Craft Experiences That Feel Effortless And Human.
      </p>
    </div>

    {/* Right Scroll Section */}
    <div className="h-full overflow-x-auto pr-2 scrollbar-hide">
      <div className="flex space-x-6 h-full">
        {[
          {
            name: "Martin S.",
            role: "Lead Designer",
            img: "https://genesisvirtue.com/assets/media/team/1.png",
          },
          {
            name: "Karen J.",
            role: "Lead Developer",
            img: "https://genesisvirtue.com/assets/media/team/4.png",
          },
          {
            name: "Natasha P.",
            role: "Design Intern",
            img: "https://genesisvirtue.com/assets/media/team/6.png",
          },
          {
            name: "David L.",
            role: "UI/UX Specialist",
            img: "https://genesisvirtue.com/assets/media/team/9.png",
          },
          {
            name: "Sophia R.",
            role: "Project Manager",
            img: "https://genesisvirtue.com/assets/media/team/10.png",
          },
        ].map((member, index) => (
          <div key={index} className="text-center flex-shrink-0 w-48">
            <img
              src={member.img}
              alt={member.name}
              className="rounded-lg shadow-md w-full h-104 object-cover"
            />
            <h3 className="mt-4 font-bold">{member.name}</h3>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>



      {/* Career Section */}
      <section className="w-full py-16 px-6 bg-gray-50 mx-auto roboto-condensed ">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-3xl mx-auto">
          <div className=" ">
             <h2 className="text-2xl font-bold mb-6  text-gray-400 ">Join Our Team</h2>
            <h3 className="text-xl font-bold mb-4">Design The Future With Us</h3>
            <p className="text-gray-600">
              If You Love Design, Strategy, And Meaningful Work, You’ll Fit Right In.  
              We’re A Close-Knit Team That Values Collaboration, Curiosity, And Craftsmanship.  
              If You’re Driven By Purpose And Love Designing With Impact, We’d Love To Meet You.
            </p>
          </div>
          <img src={career} alt="Life at Genesis Virtue" className="rounded-lg shadow-md grayscale" />
        </div>
      </section>
    
    </>
  );
}
