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
      className='text-slate-50 flex flex-col gap-6 transform-gpu will-change-contents'
    >
      <p>
        As a Full Stack Developer grounded in engineering and design, I've
        always been driven by the magic that happens when these two worlds
        collide.
      </p>
      <p>
        With a keen eye for detail and a knack for leading-edge technologies, my
        portfolio ranges from intricately designed data visualizations to
        automation workflows that breathe efficiency into systems.
      </p>
      <p>
        Whether I'm steering the ship alone or navigating in a crew, my north
        star is the same: to deliver impactful, scalable solutions that are
        laser-focused on the unique needs of each organization.
      </p>
    </TypeShufflerWrapper>
  );
};

export default About;
