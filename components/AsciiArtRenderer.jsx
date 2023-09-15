import { useEffect, useRef, useState } from "react";
import { fadeAsciiArt } from "@/utils/asciiAnimationFade";
import { setupHoverEffect } from "@/utils/asciiHoverHandler";
import useDeviceType from "@/utils/useDeviceType";

const leftArrowStart = 1;
const leftArrowEnd = 14;
const textStart = 15;
const textEnd = 86;
const rightArrowStart = 87;
const rightArrowEnd = 100;

const AsciiArtRenderer = ({ asciiJson, onAsciiChange }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const asciiRef = useRef(null);
  const isDesktop = useDeviceType();

  useEffect(() => {
    if (isFirstRender && isDesktop !== null) {
      fadeAsciiArt(asciiRef);
      setIsFirstRender(false);
    }
    setupHoverEffect(asciiRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asciiJson, isDesktop]);

  return (
    <div
      ref={asciiRef}
      className='whitespace-pre inline-block tracking-[0] leading-[1.4] sm:text-xs text-[0.4rem]'
    >
      <div
        id='left-arrow-overlay'
        onClick={() => onAsciiChange("back")}
        className='absolute sm:w-16 sm:h-24 sm:top-6 sm:left-7 w-11 h-16 top-11 left-3 bg-transparent cursor-pointer'
      ></div>
      <div
        id='right-arrow-overlay'
        onClick={() => onAsciiChange("next")}
        className='absolute sm:w-16 sm:h-24 sm:top-6 sm:right-7 w-11 h-16 top-11 right-3 bg-transparent cursor-pointer'
      ></div>
      {asciiJson.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, cellIndex) => {
            return (
              <span
                key={cellIndex}
                className={[
                  "ascii-char",
                  "opacity-0",
                  cell.char !== "&" &&
                  cell.char !== "%" &&
                  rowIndex * 100 + cellIndex < 800
                    ? cellIndex >= leftArrowStart - 1 &&
                      cellIndex <= leftArrowEnd - 1
                      ? "left-arrow-effect"
                      : cellIndex >= textStart - 1 && cellIndex <= textEnd - 1
                      ? "text-effect"
                      : cellIndex >= rightArrowStart - 1 &&
                        cellIndex <= rightArrowEnd - 1
                      ? "right-arrow-effect"
                      : ""
                    : "",
                ].join(" ")}
                style={{ color: cell.color }}
                data-original-color={cell.color}
              >
                {cell.char}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default AsciiArtRenderer;
