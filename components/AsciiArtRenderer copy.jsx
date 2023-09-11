import { useEffect, useRef } from "react";
import { fadeAsciiArt } from "@/utils/asciiAnimationFade";

// Grouped by two

const AsciiArtRenderer = ({ asciiJson }) => {
  const asciiRef = useRef(null);

  useEffect(() => {
    fadeAsciiArt(asciiRef);
  }, [asciiJson]);

  return (
    <div
      ref={asciiRef}
      className='whitespace-pre inline-block tracking-[0] leading-[1.4] sm:text-xs font-mono text-[0.3em]'
    >
      {asciiJson.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.reduce((acc, cell, cellIndex, array) => {
            if (cellIndex % 2 === 0) {
              const nextCell = array[cellIndex + 1];
              const combinedChar = cell.char + (nextCell ? nextCell.char : "");
              const combinedColor = cell.color; // Keeping it simple; you can make it more complex if needed

              acc.push(
                <span
                  key={cellIndex}
                  className='ascii-char opacity-0'
                  style={{ color: combinedColor }}
                >
                  {combinedChar}
                </span>
              );
            }
            return acc;
          }, [])}
        </div>
      ))}
    </div>
  );
};

export default AsciiArtRenderer;
