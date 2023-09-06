"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import courgette100 from "../public/courgette-ascii-100.json";

const Intro = () => {
  const asciiRef = useRef(null);

  useEffect(() => {
    const characters = asciiRef.current.querySelectorAll(".ascii-char");
    gsap.fromTo(
      characters,
      { autoAlpha: 0, y: "-=20" },
      { autoAlpha: 1, y: "+=20", stagger: 0.0005, duration: 0.5 }
    );
  }, []);

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='art' ref={asciiRef}>
        {courgette100.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <span
                key={cellIndex}
                className='ascii-char opacity-0'
                style={{ color: cell.color }}
              >
                {cell.char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
