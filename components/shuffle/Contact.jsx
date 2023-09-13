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
        <span>Email:</span> <span>hh.dreamer@gmail.com</span>
      </div>
      <div>
        <span>Twitter:</span> <span>@hh_dreamer</span>
      </div>
      <div>
        <span>Github:</span> <span>github.com/hhdreamer13</span>
      </div>
      <div>
        <button onClick={() => window.open("path/to/your/resume.pdf")}>
          Download Resume
        </button>
      </div>
    </TypeShufflerWrapper>
  );
};

export default Contact;
