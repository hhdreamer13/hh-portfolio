"use client";

import { useEffect, useRef } from "react";

import courgette100 from "../public/courgette-ascii-100.json";
import { fadeAsciiIn } from "@/utils/asciiAnimationFade";

const Intro = () => {
  const asciiRef = useRef(null);

  useEffect(() => {
    fadeAsciiIn(asciiRef);
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
