/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      "red-light": "#701111ff", // previously 700
      red: "#4e0f0fff", // previously 800
      "red-dark": "#2d0a0aff", // previously 900
    },
  },
};
export const plugins = [];
