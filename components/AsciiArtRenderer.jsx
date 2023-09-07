import React, { useEffect, useRef } from "react";
import { fadeAsciiArt } from "@/utils/asciiAnimationFade";

const AsciiArtRenderer = () => {
  const asciiRef = useRef(null);

  useEffect(() => {
    // Fetch the pre-rendered HTML from your public directory
    fetch("/asciiArt.html")
      .then((response) => response.text())
      .then((html) => {
        asciiRef.current.innerHTML = html;
        fadeAsciiArt(asciiRef);
      });
  }, []);

  return (
    <div
      ref={asciiRef}
      className='whitespace-pre inline-block tracking-[0] leading-[1.4] text-xs font-mono text-[0.5em] transition-all duration-1000 ease-in-out hover:grayscale'
    >
      {/* Content will be filled in from asciiArt.html */}
    </div>
  );
};

export default AsciiArtRenderer;
