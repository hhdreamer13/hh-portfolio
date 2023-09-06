import gsap from "gsap";

export const fadeAsciiIn = (asciiRef) => {
  const characters = asciiRef.current.querySelectorAll(".ascii-char");
  gsap.fromTo(
    characters,
    { autoAlpha: 0, y: "-=20" },
    { autoAlpha: 1, y: "+=20", stagger: 0.0005, duration: 0.5 }
  );
};
