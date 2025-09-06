import React, { useEffect, useRef, useState } from "react";

export default function CenterCheck() {
  const divRef = useRef(null);
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!divRef.current) return;

      const rect = divRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const divCenter = rect.top + rect.height / 2;

      // Check if the div center is close to viewport center
      setIsCentered(Math.abs(viewportCenter - divCenter) < 50); // 50px tolerance
    };

    window.addEventListener("scroll", handleScroll);

    // ✅ Run once on mount to check initial position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      {/* Spacer before to allow scrolling */}
      <div style={{ height: "600px" }} />

      <div
        ref={divRef}
        style={{
          height: "200px",
          background: isCentered ? "lightgreen" : "lightcoral",
          transition: "0.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {isCentered ? "I'm in the center 🎯" : "Scroll to center me"}
      </div>

      {/* Spacer after */}
      <div style={{ height: "600px" }} />
    </div>
  );
}
