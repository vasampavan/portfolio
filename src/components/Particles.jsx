// src/components/Particles.jsx
import React from "react";

const NUM_PARTICLES = 35; // adjust for density

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Particles() {
  const nodes = Array.from({ length: NUM_PARTICLES }).map((_, i) => {
    const size = Math.round(rand(6, 15)); // px
    const style = {
      width: `${size}px`,
      height: `${size}px`,
      left: `${rand(0, 100)}%`,
      top: `${rand(0, 100)}%`,
      animationDuration: `${rand(18, 45)}s`,
      animationDelay: `${rand(-45, 0)}s`,
      opacity: rand(0.15, 0.9),
    };
    return <span className="particle" key={i} style={style} />;
  });

  return <div className="particles">{nodes}</div>;
}
