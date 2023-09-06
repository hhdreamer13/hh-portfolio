export const animateAsciiArt = (
  asciiRef,
  courgette100,
  scrambleIntervalDuration,
  revealDuration,
  staggerDelay
) => {
  // Flatten the courgette100 array for easier manipulation
  const flatArray = courgette100.flat();

  // Loop through and initially set placeholders only for cells to be animated
  const initialElements = asciiRef.current.querySelectorAll(".ascii-char");
  flatArray.forEach((cell, index) => {
    const originalChar = cell.char;
    if (![".", ",", "*"].includes(originalChar)) {
      initialElements[index].textContent = "-";
    }
  });

  flatArray.forEach((cell, index) => {
    const originalChar = cell.char;
    let elapsedTime = 0;

    // Skip animation for certain characters
    if ([".", ",", "*"].includes(originalChar)) {
      return;
    }

    const scrambleInterval = setInterval(() => {
      const randomChar = "0123456789!@#$%^&*()-=_+{}[]|:;<>,.?/~"[
        Math.floor(Math.random() * 39)
      ];
      const charElement =
        asciiRef.current.querySelectorAll(".ascii-char")[index];
      charElement.textContent = randomChar;
      elapsedTime += scrambleIntervalDuration;

      if (elapsedTime >= revealDuration) {
        clearInterval(scrambleInterval);
      }
    }, scrambleIntervalDuration);

    setTimeout(() => {
      clearInterval(scrambleInterval);
      const charElement =
        asciiRef.current.querySelectorAll(".ascii-char")[index];
      charElement.textContent = originalChar;
    }, revealDuration + index * staggerDelay);
  });
};
