/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark_orange: "#fb7e5e",
        light_orange: "#f1d387",
        dark_sky: "#7a9691",
        dark_green: "#3a4339",
        sky_blue: "#377582",
        background_color: "#eed5c5",
        dark_blue: "#2f3240",
      },
    },
  },
  plugins: [],
};
