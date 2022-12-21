#!/bin/bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
echo '/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
' > tailwind.config.js

echo '@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
' > styles/globals.css