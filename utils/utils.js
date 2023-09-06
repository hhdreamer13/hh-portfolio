export const generateDots = (num) => {
  return ".".repeat(num);
};

export const generateGrid = (
  rows,
  cols,
  textPositions = [],
  commaRows = []
) => {
  const grid = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: cols }, (_, colIndex) => {
      // Check if this cell should have text
      const textPosition = textPositions.find(
        (pos) => pos.row === rowIndex && pos.col === colIndex
      );
      if (textPosition) {
        return textPosition.text;
      }

      // Check if this row should have commas instead of dots
      if (commaRows.includes(rowIndex)) {
        return ",";
      }

      // Default to a dot
      return ".";
    })
  );

  return grid;
};
