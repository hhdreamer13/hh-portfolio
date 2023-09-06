"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

import courgette100 from "../public/courgette-ascii-100.json";

const Intro = () => {
  const asciiRef = useRef(null);

  const scrambleIntervalDuration = 0.0001;
  const revealDuration = 100;
  const staggerDelay = 1;

  useEffect(() => {
    // Flatten the courgette100 array for easier manipulation
    const flatArray = courgette100.flat();

    // Initially set all cells to a placeholder
    const initialPlaceholder = asciiRef.current.querySelectorAll(".ascii-char");
    initialPlaceholder.forEach((el) => {
      el.textContent = "-";
    });

    flatArray.forEach((cell, index) => {
      const originalChar = cell.char;
      let elapsedTime = 0;

      // Skip animation for certain characters
      if ([".", ",", "*"].includes(originalChar)) {
        return;
      }

      const scrambleInterval = setInterval(() => {
        const randomChar = "0123456789!@#$%^&*()-=_+{}[]|:;<>,.?/~"[
          Math.floor(Math.random() * 39)
        ];
        const charElement =
          asciiRef.current.querySelectorAll(".ascii-char")[index];
        charElement.textContent = randomChar;
        elapsedTime += scrambleIntervalDuration;

        if (elapsedTime >= revealDuration) {
          clearInterval(scrambleInterval);
        }
      }, scrambleIntervalDuration);

      setTimeout(() => {
        clearInterval(scrambleInterval);
        const charElement =
          asciiRef.current.querySelectorAll(".ascii-char")[index];
        charElement.textContent = originalChar;
      }, revealDuration + index * staggerDelay);
    });
  }, [scrambleIntervalDuration, revealDuration, staggerDelay]);

  return (
    <div className='h-screen w-full flex items-center justify-center'>
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
