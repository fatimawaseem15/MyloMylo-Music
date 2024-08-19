// tailwind.config.js
module.exports = {
  content: [
    "./main.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
       primary:'#000000',
       secondary:"#A825C1",
       thirdColor:"#767676",
      },
      container: {
        center: true,
        padding:{
         DEFAULT: "1rem",
          sm: "3rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "7rem",
        }
       }
    },
  },
  plugins: [],
}
