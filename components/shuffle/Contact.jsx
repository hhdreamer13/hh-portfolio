/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import dynamic from "next/dynamic";

const TypeShufflerWrapper = dynamic(() => import("./TypeShufflerWrapper"), {
  ssr: false,
});
const Contact = () => {
  const textElementRef = useRef(null);

  return (
    <TypeShufflerWrapper
      ref={textElementRef.current}
      className='text-slate-50 flex flex-col gap-6'
    >
      <div>
        <span className='text-[#e8b785]'>Email:</span>
        <a href='mailto:hooman.hmzd@gmail.com' className='hover:text-cyan-600'>
          {" "}
          hooman.hmzd@gmail.com
        </a>
      </div>
      <div>
        <span className='text-[#e8b785]'>Twitter:</span>
        <a
          className='hover:text-cyan-600'
          href='https://twitter.com/hooman_h7'
          target='_blank'
          rel='noopener noreferrer'
        >
          {" "}
          @hooman_h7
        </a>
      </div>
      {/* <div>
        <span className='text-[#e8b785]'>Github:</span>{" "}
        <a
          className='hover:text-cyan-600'
          href='https://github.com/hhdreamer13'
          target='_blank'
          rel='noopener noreferrer'
        >
          {" "}
          github.com/hhdreamer13
        </a>
      </div> */}
    </TypeShufflerWrapper>
  );
};

export default Contact;
