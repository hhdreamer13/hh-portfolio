/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import dynamic from "next/dynamic";

const TypeShufflerWrapper = dynamic(() => import("./TypeShufflerWrapper"), {
  ssr: false,
});

const Project = () => {
  const textElementRef = useRef(null);

  return (
    <TypeShufflerWrapper
      ref={textElementRef.current}
      className='text-slate-50 flex flex-col gap-6'
    >
      <p>
        Experienced developer who moved to France in 2020 for academia, only to
        discover a greater passion for hands-on problem solving.
      </p>
      <p>
        With a background in engineering and design, I've excelled in every
        role, delivering solutions that go beyond expectations.
      </p>
      <p>
        Proficient in JavaScript, React, Next.js, Node.js, and Python, my
        diverse skills enable robust full-stack solutions. Highly autonomous but
        collaborative, I'm committed to facing challenges and proving my
        adaptability in every project.
      </p>
    </TypeShufflerWrapper>
  );
};

export default Project;
