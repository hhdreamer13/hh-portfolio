"use client";

import { useState } from "react";
import useDeviceType from "@/utils/useDeviceType";

import AsciiArtRenderer from "./AsciiArtRenderer";

import hoomanLight from "../public/hooman-light.json";
import aboutLight from "../public/about-light.json";
import projectLight from "../public/project-light.json";
import contactLight from "../public/contact-light.json";

import hooman from "../public/hooman.json";
import about from "../public/about.json";
import project from "../public/project.json";
import contact from "../public/contact.json";

import hoomanMobileLight from "../public/hooman-mobile-light.json";
import aboutMobileLight from "../public/about-mobile-light.json";
import projectMobileLight from "../public/project-mobile-light.json";
import contactMobileLight from "../public/contact-mobile-light.json";

import hoomanMobile from "../public/hooman-mobile.json";
import aboutMobile from "../public/about-mobile.json";
import projectMobile from "../public/project-mobile.json";
import contactMobile from "../public/contact-mobile.json";

import About from "./shuffle/About";
import Contact from "./shuffle/Contact";
import Project from "./shuffle/Project";

const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useDeviceType();

  const asciiArtsLight =
    isDesktop === null || isDesktop
      ? [hoomanLight, aboutLight, projectLight, contactLight]
      : [
          hoomanMobileLight,
          aboutMobileLight,
          projectMobileLight,
          contactMobileLight,
        ];

  const asciiArts =
    isDesktop === null || isDesktop
      ? [hooman, about, project, contact]
      : [hoomanMobile, aboutMobile, projectMobile, contactMobile];

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
      <div className='sm:h-screen min-h-screen w-full flex items-center justify-center'>
        <div className='absolute sm:top-1/2 left-1/2 -translate-x-1/2 sm:-translate-y-1/2 top-0 translate-y-0 overflow-hidden'>
          <AsciiArtRenderer
            asciiJson={asciiArts[currentIndex]}
            onAsciiChange={handleAsciiChange}
          />
        </div>
        {currentIndex !== 0 && (
          <div className='sm:relative absolute top-28 sm:top-0 sm:w-[725px] w-[380px] min-h-[560px] sm:h-[560px] max-h-fit sm:max-h-0 sm:px-1 px-3 sm:mt-40 mt-0 sm:rounded-md rounded-none sm:pt-10 pt-7 pb-5 text-justify bg-slate-950 backdrop-blur-md'>
            {renderTextShuffle()}
          </div>
        )}
      </div>
    </>
  );
};

export default Intro;
