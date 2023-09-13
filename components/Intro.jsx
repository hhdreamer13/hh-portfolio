"use client";

import { useState } from "react";

import AsciiArtRenderer from "./AsciiArtRenderer";

import about from "../public/about.json";
import contact from "../public/contact.json";
import project from "../public/project.json";
import hooman from "../public/hooman.json";
import About from "./shuffle/About";
import Contact from "./shuffle/Contact";
import Project from "./shuffle/Project";

const Intro = () => {
  const asciiArts = [hooman, about, project, contact];
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

  const renderTextShuffle = () => {
    switch (currentIndex) {
      case 1:
        return <About />;
      case 2:
        return <Project />;
      case 3:
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='h-screen w-full flex items-center justify-center bg-slate-950 overflow-hidden'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <AsciiArtRenderer
            asciiJson={asciiArts[currentIndex]}
            onAsciiChange={handleAsciiChange}
          />
        </div>
        {currentIndex !== 0 && (
          <div className='w-[725px] h-[560px] px-1 mt-40 rounded-md pt-10 text-justify bg-slate-950 backdrop-blur-md'>
            {renderTextShuffle()}
          </div>
        )}
      </div>
    </>
  );
};

export default Intro;
