"use client";

import AsciiArtRenderer from "./AsciiArtRenderer";
import courgetteLg from "../public/courgette-ascii-100-dark.json";

const Intro = () => {
  return (
    <>
      <div className='h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950'>
        <AsciiArtRenderer asciiJson={courgetteLg} />
      </div>
    </>
  );
};

export default Intro;
