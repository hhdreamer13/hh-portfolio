"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

import courgette100 from "../public/courgette-ascii-100.json";
import { shuffleAsciiArt } from "@/utils/asciiAnimationShuffle";

const Intro = () => {
  const asciiRef = useRef(null);

  const scrambleIntervalDuration = 0.0001;
  const revealDuration = 100;
  const staggerDelay = 1;

  useEffect(() => {
    // Call the animateAsciiArt function
    shuffleAsciiArt(
      asciiRef,
      courgette100,
      scrambleIntervalDuration,
      revealDuration,
      staggerDelay
    );
  }, [scrambleIntervalDuration, revealDuration, staggerDelay]);

  return (
    <div className='h-screen w-full flex items-center justify-center overflow-hidden'>
      <div className='art' ref={asciiRef}>
        {courgette100.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <span
                key={cellIndex}
                className='ascii-char'
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
