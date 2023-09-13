/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import { TypeShuffler } from "./TypeShuffler";

const RetroText = () => {
  const textElementRef = useRef(null);

  useEffect(() => {
    if (textElementRef.current) {
      const typeShuffle = new TypeShuffler(textElementRef.current);
      typeShuffle.trigger("fx1");
    }
  }, []);

  return (
    <div
      ref={textElementRef}
      className='font-mono text-slate-50 flex flex-col gap-6'
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
    </div>
  );
};

export default RetroText;
