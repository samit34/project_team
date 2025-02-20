import forms from "@tailwindcss/forms";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css", // Ensure custom styles are included
  ],
  theme: {
    extend: {
      boxShadow: {
        xs: "0 1px 1px rgba(0, 0, 0, 0.05)", // Custom shadow-xs
      },
      colors: {
        violet: {
          500: "var(--color-violet-500)", // Define Tailwind color using a CSS variable
        },
      },
    },
  },
  plugins: [forms()],
};

