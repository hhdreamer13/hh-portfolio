import gsap from "gsap";

export const fadeAsciiArt = (asciiRef) => {
  const characters = asciiRef.current.querySelectorAll(".ascii-char");
  gsap.fromTo(
    characters,
    { autoAlpha: 0, y: "-=20" },
    {
      autoAlpha: 1,
      y: "+=20",
      stagger: {
        each: 0.0005,
        from: "random",
      },
      duration: 0.5,
      //   ease: "easeInOut",
    }
  );
};
