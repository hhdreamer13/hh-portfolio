import gsap from "gsap";

export const fadeAsciiArt = (asciiRef) => {
  const characters = asciiRef.current.querySelectorAll(".ascii-char");
  gsap.fromTo(
    characters,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      stagger: {
        each: 0.003,
        from: "random",
      },
      duration: 0.1,
    }
  );
};
