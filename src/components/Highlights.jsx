import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactTyped } from "react-typed";

export default function Highlights() {
  const [typingDone, setTypingDone] = useState(false);
  const [allAnimationsDone, setAllAnimationsDone] = useState(false);

  // trigger when center of section is visible
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // 0.5 = center of section hits viewport center
  });

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        when: "afterChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const textParts = [
    [
      "OUR STRENGTH LIES IN LISTENING FIRST, DESIGNING SECOND — SO YOUR ",
      { word: "VISION", color: "#F20574", text: "white" },
      " BECOMES A SEAMLESS ",
      { word: "REALITY", color: "#ffdd00", text: "white" },
      ".",
    ],
    [
      "WE BRIDGE ",
      { word: "AESTHETICS", color: "#f25c05", text: "white" },
      " AND ",
      { word: "FUNCTIONALITY", color: "#28a691", text: "white" },
      ", CREATING DIGITAL IDENTITIES THAT NOT ONLY LOOK GOOD BUT TRULY WORK FOR ",
      { word: "PEOPLE", color: "#8a38f5", text: "white" },
      ".",
    ],
  ];

  // 🔒 Lock scroll only when section is centered & animations not finished
  useEffect(() => {
    if (inView && !allAnimationsDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [inView, allAnimationsDone]);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen flex items-center justify-center bg-white px-6 mx-auto"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
        {/* Left Column */}
        <div className="order-1 md:order-1">
          {typingDone && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                delay: textParts.length * 0.4,
              }}
              className="flex flex-col items-center justify-center text-left space-y-4"
            >
              <h1 className="text-3xl md:text-4xl font-extrabold roboto-condensed">
                GENESIS VIRTUE
              </h1>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="border border-black px-6 py-2 text-base rounded-lg hover:bg-black hover:text-white transition roboto-condensed"
              >
                CHAT WITH US
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Right Column */}
        <div className="text-left mt-15 roboto-condensed order-2 md:order-2">
          {!typingDone && inView && (
            <ReactTyped
              strings={[
                `OUR STRENGTH LIES IN LISTENING FIRST, DESIGNING SECOND — SO YOUR VISION BECOMES A SEAMLESS REALITY. 
<br/>
WE BRIDGE AESTHETICS AND FUNCTIONALITY, CREATING DIGITAL IDENTITIES THAT NOT ONLY LOOK GOOD BUT TRULY WORK FOR PEOPLE.`,
              ]}
              typeSpeed={20}
              showCursor={false}
              onComplete={() => setTypingDone(true)}
              className="text-lg md:text-xl font-bold leading-relaxed text-black"
            />
          )}

          {typingDone && (
            <motion.div
              initial="hidden"
              animate="show"
              variants={container}
              className="mt-6 space-y-6"
              onAnimationComplete={() => setAllAnimationsDone(true)}
            >
              {textParts.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-lg md:text-xl font-bold text-gray-400 leading-loose roboto-condensed"
                >
                  {paragraph.map((part, i) =>
                    typeof part === "string" ? (
                      part
                    ) : (
                      <motion.span
                        key={i}
                        variants={item}
                        className="px-3 py-1 rounded-full mx-1 inline-block roboto-condensed"
                        style={{
                          backgroundColor: part.color,
                          color: part.text,
                        }}
                      >
                        {part.word}
                      </motion.span>
                    )
                  )}
                </p>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
