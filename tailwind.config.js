/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        calisga: ["Calisga"],
      },
      colors: {
        offWhite: "#F6ECE0",
        brown: "#4F2B28",
      },
    },
    backgroundImage: {
      pepperTexture: "url('../assets/textures/pepper texture.webp')",
      headTexture: "url('../assets/textures/head texture.webp')",
    },
  },
  plugins: [],
};
