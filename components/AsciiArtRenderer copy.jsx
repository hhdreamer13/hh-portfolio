import { useEffect, useRef } from "react";
import { fadeAsciiArt } from "@/utils/asciiAnimationFade";

const AsciiArtRenderer = ({ asciiJson }) => {
  const asciiRef = useRef(null);

  useEffect(() => {
    fadeAsciiArt(asciiRef);
  }, [asciiJson]);

  return (
    <div
      ref={asciiRef}
      className='whitespace-pre inline-block tracking-[0] leading-[1.4] text-xs font-mono text-[0.3em]'
    >
      {asciiJson.map((row, rowIndex) => (
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
  );
};

export default AsciiArtRenderer;
