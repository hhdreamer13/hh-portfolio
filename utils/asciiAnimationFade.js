import gsap from "gsap";

export const fadeAsciiArt = (asciiRef) => {
  const characters = asciiRef.current.querySelectorAll(".ascii-char");
  const chunkSize = 50;
  const chunks = [];
  const fadeDuration = 0.1;
  const totalDuration = characters.length * 0.002;

  console.log(characters);

  const glitchStopTime = totalDuration - fadeDuration;

  for (let i = 0; i < characters.length; i += chunkSize) {
    chunks.push(Array.from(characters).slice(i, i + chunkSize));
  }

  const glitchEffect = (chunks, stopTime) => {
    const glitchDuration = 0.09;
    const glitchesCount = stopTime / glitchDuration;

    for (let i = 0; i < glitchesCount; i++) {
      setTimeout(() => {
        const randomChunkIndex = Math.floor(Math.random() * chunks.length);
        const randomChunk = chunks[randomChunkIndex];
        const subset = randomChunk.slice(
          0,
          Math.floor(Math.random() * randomChunk.length)
        );
        gsap.to(subset, {
          autoAlpha: 0,
          duration: glitchDuration,
          yoyo: true,
          repeat: 1,
        });
      }, i * glitchDuration * 1000);
    }
  };

  const ensureFullVisibility = () => {
    gsap.to(characters, {
      autoAlpha: 1,
      duration: 0.01,
    });
  };

  gsap.fromTo(
    chunks,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      stagger: {
        each: 0.002,
        from: "random",
      },
      duration: fadeDuration,
      onStart: () => glitchEffect(chunks, glitchStopTime),
      onComplete: ensureFullVisibility,
    }
  );
};
