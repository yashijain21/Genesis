import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import vdo from "../assets/Drivingbrands.mp4";
export default function DrivingBrandsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="w-full bg-white py-20 mx-auto">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left: Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold leading-tight roboto-condensed ">
            DRIVING BRANDS TOWARDS TOMORROW
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 roboto-condensed">
            Smart. Creative. Future-Ready.
          </h3>
          <p className="text-gray-600 leading-relaxed roboto-condensed">
            The world doesn’t wait and neither should your brand. We partner
            with you to transform challenges into opportunities through digital
            marketing that’s strategic, innovative, and impactful. From crafting
            bold identities to elevating your online presence and building
            campaigns that connect, we ensure your brand doesn’t just adapt to
            change—it leads it.
          </p>
        </div>

        {/* Right: Video */}
        <div className="md:w-1/2">
          <video
            className="w-[1034px] h-[400px] md:h-96 object-cover rounded-lg shadow-inner"
            src={vdo}
            autoPlay
            loop
            muted
          />
        </div>
      </motion.div>
    </section>
  );
}
