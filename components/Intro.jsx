"use client";

import courgetteLg from "../public/courgette-ascii-100.json";
import AsciiArtRenderer from "./AsciiArtRenderer";

const Intro = () => {
  return (
    <>
      <div className='h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-950'>
        <AsciiArtRenderer asciiJson={courgetteLg} />
      </div>
    </>
  );
};

export default Intro;
