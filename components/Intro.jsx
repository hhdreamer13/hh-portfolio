"use client";

import { useState } from "react";
import AsciiArtRenderer from "./AsciiArtRenderer";
import about from "../public/about.json";
import contact from "../public/contact.json";
import project from "../public/project.json";

const Intro = () => {
  const asciiArts = [about, contact, project];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAsciiChange = (direction) => {
    let newIndex = currentIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % asciiArts.length;
    } else if (direction === "back") {
      newIndex = (currentIndex - 1 + asciiArts.length) % asciiArts.length;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className='h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <AsciiArtRenderer
            asciiJson={asciiArts[currentIndex]}
            onAsciiChange={handleAsciiChange}
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
