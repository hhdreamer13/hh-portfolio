const TextRenderer = ({ text, row, col }) => {
  return <div style={{ gridRowStart: row, gridColumnStart: col }}>{text}</div>;
};

export default TextRenderer;
