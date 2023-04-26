import { useState, useEffect } from "react";

const ButtonColor = ({ item }: any) => {
  const [textColor, setTextColor] = useState<string>("");

  useEffect(() => {
    const backgroundColor = item;

    // Convert the background color to an RGB value
    const rgbColor = hexToRgb(backgroundColor);

    // Calculate the relative luminance of the color using the formula
    // recommended by WCAG 2.0 (https://www.w3.org/TR/WCAG20/#relativeluminancedef)
    const relativeLuminance = calculateRelativeLuminance(rgbColor);

    // Set the text color based on the relative luminance of the background color
    setTextColor(relativeLuminance > 0.5 ? "#000000" : "#FFFFFF");
  }, [item]);

  return (
    <div
      className="w-fit px-[6rem] py-4 rounded-md mx-auto border-2 border-gray-700"
      style={{ backgroundColor: item, color: textColor }}
    >
      {item}
    </div>
  );
};

function hexToRgb(hexColor: string): { r: number; g: number; b: number } {
  const hex = hexColor.replace("#", "");

  if (hex.length !== 3 && hex.length !== 6) {
    throw new Error("Invalid hex color value");
  }

  const numericValue = parseInt(hex, 16);

  if (hex.length === 3) {
    // Expand shorthand notation (e.g. #abc => #aabbcc)
    const r = (numericValue >> 8) & 0xf;
    const g = (numericValue >> 4) & 0xf;
    const b = numericValue & 0xf;

    return {
      r: (r << 4) | r,
      g: (g << 4) | g,
      b: (b << 4) | b,
    };
  } else {
    return {
      r: (numericValue >> 16) & 0xff,
      g: (numericValue >> 8) & 0xff,
      b: numericValue & 0xff,
    };
  }
}

function calculateRelativeLuminance({
  r,
  g,
  b,
}: {
  r: number;
  g: number;
  b: number;
}): number {
  const sRGB = [r, g, b].map((value) => {
    const normalized = value / 255;

    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });

  return sRGB[0] * 0.2126 + sRGB[1] * 0.7152 + sRGB[2] * 0.0722;
}

export default ButtonColor;
