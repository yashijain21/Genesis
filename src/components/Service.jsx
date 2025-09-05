import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import vdo1 from "../assets/Design.mp4";
import vdo2 from "../assets/Development.mp4";
import vdo3 from "../assets/Digital Mar.mp4";
import vdo4 from "../assets/it.mp4";
import vdo5 from "../assets/devops.mp4";
const services = [
  {
    id: 1,
    title: "01 DESIGN",
    color: "#F20574",
    description: "Smart, Engaging Designs That Drive Real Impact",
    content: {
      paragraph:
        "We create digital experiences that are more than just beautiful—they’re intuitive, functional, and conversion-driven. From UI/UX to websites and apps, our designs are crafted to help your brand stand out and deliver results.",
      bullets: [
        "User Experience Design",
        "User Interface Design",
        "User Experience Review",
        "Website Designing",
      ],
    },
    vdo: vdo1,
    imageAlt: "UI/UX wireframes and app screen mockups",
    cta: { label: "Explore More", href: "#" },
  },
  {
    id: 2,
    title: "02 DEVELOPMENT",
    color: "#ffdd00",
    description: "Scalable, Reliable Solutions Built For Growth",
    content: {
      paragraph:
        "We develop applications and platforms that go beyond code—robust, secure, and built to scale. From custom software to enterprise solutions, our development ensures your business runs seamlessly and grows with confidence.",
      bullets: [
        "Development And Operations",
        "Mobile App Development",
        "CRM Development",
        "Software Development",
        "CMS",
        "AR & VR",
        "IoT",
      ],
    },
    vdo: vdo2,
    imageAlt: "Scalable application architecture diagram",
    cta: { label: "Explore More", href: "#" },
  },
  {
    id: 3,
    title: "03 DIGITAL MARKETING",
    color: "#f25c05",
    description: "Future-Ready Strategies That Amplify Your Brand",
    content: {
      paragraph:
        "We craft marketing strategies that do more than attract—they engage, convert, and retain. From SEO to social campaigns, we help your brand stay ahead, connect with the right audience, and drive measurable impact.",
      bullets: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Google Advertising",
        "Influencer Marketing",
        "Online Reputation Management",
        "Content Writing",
        "Copy/Script Writing",
        "Content Translation",
      ],
    },
   vdo: vdo3,
    imageAlt: "Analytics dashboard and social campaign visuals",
    cta: { label: "Explore More", href: "#" },
  },
  {
    id: 4,
    title: "04 IT CONSULTING SERVICES",
    color: "#28a691",
    description: "Agile, Efficient, And Always Optimized",
    content: {
      paragraph:
        "We streamline processes to bridge the gap between development and operations. Through automation, CI/CD, and cloud solutions, our DevOps approach ensures faster delivery, improved collaboration, and continuous innovation.",
      bullets: [
        "Resource Outsourcing",
        "Dedicated Development Team",
        "Cloud Services",
        "Business Intelligence",
      ],
    },
    vdo: vdo4,
    imageAlt: "Cloud and DevOps consulting illustration",
    cta: { label: "Explore More", href: "#" },
  },
  {
    id: 5,
    title: "05 DEV OPS",
    color: "#8a38f5",
    description: "Accelerate delivery with resilient, automated pipelines",
    content: {
      paragraph:
        "We bring development and operations together with CI/CD, infrastructure as code, and observability—so you ship faster with confidence.",
      bullets: [
        "Continuous Integration & Delivery (CI/CD)",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Automation & Scripting",
      ],
    },
    vdo: vdo5,
    imageAlt: "Pipelines and infrastructure automation diagram",
    cta: { label: "Explore More", href: "#" },
  },
];

const ServiceSection = ({ service }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "-100px 0px -80% 0px", // detect before leaving
  });

  React.useEffect(() => {
    if (!inView) {
      // Section is leaving → show the cover box sliding up
      controls.start({
        y: "100%",
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });
    } else {
      // Section in view → hide the cover box
      controls.start({
        y: "0%",
        opacity: 0.4,
        transition: { duration: 1, ease: "easeInOut" },
      });
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Content grid */}
      <div className="relative  z-10 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto px-6 w-full mt-20">
        {/* Left: text */}
        <div className="text-left w-full">
          <h2 className="text-5xl font-bold mb-4 roboto-condensed  border-b" style={{ color: service.color }}>
            {service.title}
          </h2>
          <p className="text-gray-700 mb-3">{service.description}</p>
          {service.content?.paragraph && (
            <p className="text-gray-600 mb-4">{service.content.paragraph}</p>
          )}
          {service.content?.bullets?.length > 0 && (
            <ul className="text-gray-600 list-disc list-inside space-y-1 mb-6">
              {service.content.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {service.cta?.label && (
            <a
              href={service.cta.href || "#"}
              className="inline-block px-5 py-2 font-medium rounded-lg transition-colors"
              style={{
                color: "#fff",
                backgroundColor: service.color,
              }}
            >
              {service.cta.label}
            </a>
          )}
        </div>

        {/* Right: image */}
        <motion.div
          className="order md:order-2 relative z-10 w-full"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 30,
            scale: inView ? 1 : 0.98,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {service.vdo ? (
            <video
  src={service.vdo}
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="w-[247px] h-[247px] object-cover rounded-xl shadow-xl bg-white/70 ml-[240px]"
/>
          ) : (
            <div className="w-full h-[60vh] rounded-xl bg-gray-200" />
          )}
        </motion.div>
      </div>

      {/* Sliding Cover Box (sits underneath content, doesn't block clicks) */}
      <motion.div
        initial={false}
        animate={controls}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: service.color }}
      />
    </div>
  );
};

export default function ServicesScroll() {
  return (
    <div className="w-full">
      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
    </div>
  );
}
