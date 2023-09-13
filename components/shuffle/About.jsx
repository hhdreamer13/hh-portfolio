/* eslint-disable react/no-unescaped-entities */
import { useEffect, useLayoutEffect, useRef } from "react";
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
      <p>
        An experienced developer with a multidisciplinary background in
        engineering and design, I moved to France in 2020 to pursue academic
        endeavors.
      </p>
      <p>
        However, my journey led me to rediscover an even deeper passion for
        hands-on problem-solving and tech innovation. In each role I've
        undertaken, I've gone above and beyond to deliver solutions that exceed
        expectations, optimize workflow, and create real-world impact.
      </p>
      <p>
        My technical proficiencies span across JavaScript, React, Next.js,
        Node.js, and Python, equipping me to engineer robust full-stack
        solutions for a variety of challenges.
      </p>
      <p>
        While I thrive in autonomous settings, my collaborative spirit comes to
        the fore in team environments. Committed to ongoing learning and
        adaptability, I embrace each project as a new challenge and an
        opportunity for growth.
      </p>
    </div>
  );
};

export default RetroText;
