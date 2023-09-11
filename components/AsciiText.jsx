import { memo } from "react";

const AsciiText = memo(function AsciiText({ textData }) {
  return textData.map((cell, cellIndex) => (
    <span
      key={cellIndex}
      className='ascii-char text-effect opacity-0'
      style={{ color: cell.color }}
    >
      {cell.char}
    </span>
  ));
});

export default AsciiText;
