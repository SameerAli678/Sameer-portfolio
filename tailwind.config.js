/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient":
          "linear-gradient(93deg, #8338EC 49.3%, #B923FF 87.76%)",
      },
      colors: {
        background: "#0B001A",
        primary: { DEFAULT: "#1E0044" },
        white: "#E9DEFF",
        black: "#0B001A",
      },
    },
  },
  plugins: [],
};
