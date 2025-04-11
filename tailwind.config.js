/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        charm: ["var(--charm)"],
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(93deg, #8338EC 49.3%, #B923FF 87.76%)",
        "Linear-Gradient":
          "linear-gradient(93deg, #8338EC 49.3%, #B923FF 87.76%)",
      },
      colors: {
        primary: { DEFAULT: "#1E0044", Normal: "#8338EC" },
        white: "#E9DEFF",
        black: "#0B001A",
        pink: "#B923FF",
      },
    },
  },
  plugins: [],
};
