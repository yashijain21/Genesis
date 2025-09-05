import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DEFAULT_PROJECTS = [
  { id: 1, title: "WEB DESIGN", subtitle: "SPEEDY DEALS", image: "https://picsum.photos/id/1011/600/600" },
  { id: 2, title: "UI/UX DESIGN", subtitle: "DR AMAN LIVE", image: "https://picsum.photos/id/1018/600/600" },
  { id: 3, title: "WEB DESIGN", subtitle: "MAMIDI", image: "https://picsum.photos/id/1025/600/600" },
  { id: 4, title: "MOBILE APP", subtitle: "REVAMP", image: "https://picsum.photos/id/1035/600/600" },
];

const ANIM_MS = 0.6; // in seconds

export default function OurWork({ projects = DEFAULT_PROJECTS, onFinished }) {
  const [index, setIndex] = useState(0);

  const handleDragEnd = (event, info) => {
    if (info.offset.y < -80) {
      // drag up → next
      setIndex((prev) => {
        const next = Math.min(projects.length - 1, prev + 1);
        return next;
      });
    } else if (info.offset.y > 80) {
      // drag down → prev
      setIndex((prev) => Math.max(0, prev - 1));
    }
  };

  // 🔔 trigger when last card reached
  useEffect(() => {
    if (index === projects.length - 1 && onFinished) {
      onFinished();
    }
  }, [index, projects.length, onFinished]);

  const cardVariantForPos = (pos) => {
    if (pos <= -1) return "top";
    if (pos === 0) return "active";
    if (pos === 1) return "next1";
    if (pos === 2) return "next2";
    return "behind";
  };

  const variants = {
    top: { y: -500, scale: 0.9, opacity: 0, rotate: -4, transition: { duration: ANIM_MS } },
    active: { y: 0, scale: 1, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 200, damping: 22 } },
    next1: { y: 60, scale: 0.92, opacity: 0.95, rotate: 2, transition: { duration: ANIM_MS } },
    next2: { y: 120, scale: 0.85, opacity: 0.75, rotate: 3, transition: { duration: ANIM_MS } },
    behind: { y: 180, scale: 0.8, opacity: 0.5, rotate: 4, transition: { duration: ANIM_MS } },
  };

  return (
    <div
      className="w-full h-[100vh] flex flex-col items-center justify-center text-black select-none"
      style={{ padding: "40px 24px" }}
    >
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Our Work</h2>

      {/* 👇 Info statement */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ fontSize: 16, color: "#666", marginBottom: 24 }}
      >
        👉 Drag up to explore more projects
      </motion.p>

      <div className="flex items-center justify-center gap-12" style={{ width: "100%", height: 520 }}>
        {/* LEFT TITLE */}
        <div style={{ width: 150, textAlign: "right" }}>
          <h3 style={{ fontSize: 56, fontWeight: 700 }}>{projects[index].title}</h3>
        </div>

        {/* STACKED CARDS */}
        <div
          className="relative"
          style={{ width: 420, height: 520, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {projects.map((p, i) => {
            const pos = i - index;
            const variant = cardVariantForPos(pos);
            const zIndex = 100 - Math.abs(pos) + (pos === 0 ? 100 : 0);

            return (
              <motion.div
                key={p.id}
                className="absolute rounded-2xl overflow-hidden shadow-xl"
                style={{
                  width: 320,
                  height: 420,
                  background: "#fff",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
                  borderRadius: 18,
                  zIndex,
                }}
                variants={variants}
                initial={false}
                animate={variant}
                drag={pos === 0 ? "y" : false}
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragEnd={pos === 0 ? handleDragEnd : undefined}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  draggable={false}
                />
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT SUBTITLE */}
        <div style={{ width: 150, textAlign: "left" }}>
          <p style={{ fontSize: 56, fontWeight: 700, opacity: 0.9 }}>{projects[index].subtitle}</p>
        </div>
      </div>
    </div>
  );
}
