"use client";

import AsciiArtRenderer from "./AsciiArtRenderer copy";
import courgetteLg from "../public/courgette-ascii-100-dark.json";

const Intro = () => {
  return (
    <>
      <div className='h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950'>
        {/* <AsciiArtRenderer /> */}
        <div className='w-full h-screen bg-slate-950 absolute top-0 left-0'></div>
        <div>
          <h2 className='text-white text-3xl'>Hooman</h2>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <AsciiArtRenderer asciiJson={courgetteLg} />
        </div>
      </div>
    </>
  );
};

export default Intro;
