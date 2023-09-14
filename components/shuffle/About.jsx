/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import dynamic from "next/dynamic";

const TypeShufflerWrapper = dynamic(() => import("./TypeShufflerWrapper"), {
  ssr: false,
});

const About = () => {
  const textElementRef = useRef(null);

  return (
    <TypeShufflerWrapper
      ref={textElementRef.current}
      className='text-slate-50 flex flex-col gap-6'
    >
      <p>
        Multifaceted Full Stack Developer with a strong foundation in
        engineering and design.
      </p>
      <p>
        Since relocating to France in 2020, I've applied my diverse skill set
        across a variety of sectors, innovatively solving problems and
        automating workflows.
      </p>
      <p>
        Proficient in leading-edge technologies, I've tackled everything from
        data visualization and workflow automation to interactive storytelling.
      </p>
      <p>
        Equally effective working autonomously or in collaborative environments,
        my focus is on delivering high-impact, scalable solutions tailored to
        the unique needs of each organization.
      </p>
    </TypeShufflerWrapper>
  );
};

export default About;
