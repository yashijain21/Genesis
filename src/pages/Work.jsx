import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurWorkScroll() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Step 1: Genesis Virtue */}
      <motion.h1
        initial={{ opacity: 1 }}
        animate={controls}
        variants={{
          visible: { opacity: 0, transition: { duration: 3, ease: "easeInOut" } },
        }}
        className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl font-bold z-10"
      >
        GENESIS VIRTUE
      </motion.h1>

      {/* Step 2: Expanding X */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={controls}
        variants={{
          visible: {
            scale: 12,
            opacity: 1,
            transition: { duration: 5, ease: "easeInOut" },
          },
        }}
        className="absolute inset-0 flex items-center justify-center text-white text-6xl md:text-8xl font-extrabold z-0"
      >
        X
      </motion.div>

      {/* Step 3: Background transition (black → white) */}
      <motion.div
        initial={{ backgroundColor: "#000000" }}
        animate={controls}
        variants={{
          visible: {
            backgroundColor: "#ffffff",
            transition: { delay: 2, duration: 2.5, ease: "easeInOut" },
          },
        }}
        className="absolute inset-0 -z-10" // put behind everything
      />

      {/* Step 4: OUR WORK Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 3.5, duration: 1.5, ease: "easeOut" },
          },
        }}
        className="relative z-20 flex flex-col items-center justify-center min-h-screen"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-black flex items-center space-x-3">
          <span>✦</span>
          <span>OUR WORK</span>
          <span>✦</span>
        </h2>

        {/* Step 5: Grid */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 5, duration: 1.5, ease: "easeOut" },
            },
          }}
          className="grid grid-cols-3 gap-4 mt-12"
        >
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-32 h-32 bg-gray-700 rounded-lg"></div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
