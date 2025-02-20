export const formatValue = (value) => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);

export const formatThousands = (value) => Intl.NumberFormat('en-US', {
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);

export const getCssVariable = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

const adjustHexOpacity = (hexColor, opacity) => {
  hexColor = hexColor.replace('#', '');
  if (hexColor.length !== 6) {
    throw new Error(`Invalid HEX color: ${hexColor}`);
  }

  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const adjustHSLOpacity = (hslColor, opacity) => {
  return hslColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity})`);
};

const adjustOKLCHOpacity = (oklchColor, opacity) => {
  return oklchColor.replace(/oklch\((.*?)\)/, (match, p1) => `oklch(${p1} / ${opacity})`);
};

export const adjustColorOpacity = (color, opacity) => {
  if (!color || typeof color !== "string" || color.trim() === "") {
    console.error(`Invalid color input: ${color}`);
    return "rgba(0, 0, 0, 0.5)"; // Default fallback color
  }

  if (color.startsWith("#")) {
    return adjustHexOpacity(color, opacity);
  } else if (color.startsWith("hsl")) {
    return adjustHSLOpacity(color, opacity);
  } else if (color.startsWith("oklch")) {
    return adjustOKLCHOpacity(color, opacity);
  } else if (color.startsWith("rgb")) {
    return color.replace("rgb", "rgba").replace(")", `, ${opacity})`);
  } else {
    console.error("Unsupported color format:", color);
    return "rgba(0, 0, 0, 0.5)";
  }
};

export const oklchToRGBA = (oklchColor) => {
  const tempDiv = document.createElement('div');
  tempDiv.style.color = oklchColor;
  document.body.appendChild(tempDiv);
  const computedColor = window.getComputedStyle(tempDiv).color;
  document.body.removeChild(tempDiv);
  return computedColor;

};



// export const formatValue = (value) => Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   maximumSignificantDigits: 3,
//   notation: 'compact',
// }).format(value);

// export const formatThousands = (value) => Intl.NumberFormat('en-US', {
//   maximumSignificantDigits: 3,
//   notation: 'compact',
// }).format(value);

// export const getCssVariable = (variable) => {
//   return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
// };

// const adjustHexOpacity = (hexColor, opacity) => {
//   // Remove the '#' if it exists
//   hexColor = hexColor.replace('#', '');

//   // Convert hex to RGB
//   const r = parseInt(hexColor.substring(0, 2), 16);
//   const g = parseInt(hexColor.substring(2, 4), 16);
//   const b = parseInt(hexColor.substring(4, 6), 16);

//   // Return RGBA string
//   return `rgba(${r}, ${g}, ${b}, ${opacity})`;
// };

// const adjustHSLOpacity = (hslColor, opacity) => {
//   // Convert HSL to HSLA
//   return hslColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity})`);
// };

// const adjustOKLCHOpacity = (oklchColor, opacity) => {
//   // Add alpha value to OKLCH color
//   return oklchColor.replace(/oklch\((.*?)\)/, (match, p1) => `oklch(${p1} / ${opacity})`);
// };

// // export const adjustColorOpacity = (color, opacity) => {
// //   if (color.startsWith('#')) {
// //     return adjustHexOpacity(color, opacity);
// //   } else if (color.startsWith('hsl')) {
// //     return adjustHSLOpacity(color, opacity);
// //   } else if (color.startsWith('oklch')) {
// //     return adjustOKLCHOpacity(color, opacity);
// //   } else {
// //     throw new Error('Unsupported color format');
// //   }
// // };
// export const adjustColorOpacity = (color, opacity) => {
//   if (!color || typeof color !== "string") {
//     throw new Error(`Invalid color input: ${color}`);
//   }

//   if (color.startsWith("#")) {
//     return adjustHexOpacity(color, opacity);
//   } else if (color.startsWith("hsl")) {
//     return adjustHSLOpacity(color, opacity);
//   } else if (color.startsWith("oklch")) {
//     return adjustOKLCHOpacity(color, opacity);
//   } else if (color.startsWith("rgb")) {
//     // Convert RGB to RGBA by adding opacity
//     return color.replace("rgb", "rgba").replace(")", `, ${opacity})`);
//   } else {
//     console.error("Unsupported color format:", color);
//     throw new Error("Unsupported color format");
//   }
// };


// export const oklchToRGBA = (oklchColor) => {
//   // Create a temporary div to use for color conversion
//   const tempDiv = document.createElement('div');
//   tempDiv.style.color = oklchColor;
//   document.body.appendChild(tempDiv);
  
//   // Get the computed style and convert to RGB
//   const computedColor = window.getComputedStyle(tempDiv).color;
//   document.body.removeChild(tempDiv);
  
//   return computedColor;
// };


