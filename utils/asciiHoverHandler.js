export const setupHoverEffect = (asciiRef) => {
  const leftOverlay = document.getElementById("left-arrow-overlay");
  const rightOverlay = document.getElementById("right-arrow-overlay");

  function handleMouseOver(effectClass) {
    const elements = document.querySelectorAll(effectClass);
    elements.forEach((el) => {
      el.style.transition = "color 0.5s ease";
      el.style.color = "#020617";
    });
  }

  function handleMouseOut(effectClass) {
    const elements = document.querySelectorAll(effectClass);
    elements.forEach((el) => {
      el.style.transition = "color 0.3s ease";
      el.style.color = el.getAttribute("data-original-color");
    });
  }

  leftOverlay.addEventListener("mouseover", () =>
    handleMouseOver(".left-arrow-effect")
  );
  leftOverlay.addEventListener("mouseout", () =>
    handleMouseOut(".left-arrow-effect")
  );
  rightOverlay.addEventListener("mouseover", () =>
    handleMouseOver(".right-arrow-effect")
  );
  rightOverlay.addEventListener("mouseout", () =>
    handleMouseOut(".right-arrow-effect")
  );
};
