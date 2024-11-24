/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./templates/**/*.html",
      "./static/src/**/*.js",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend:{
      colors:{
        "nav-black":"#161616",
        "accent-cyan":"#7e9ea8",
        "accent-cyan-highlighted":"#9EC5D2",
      },
      fontFamily:{
        Cantarell: ['"Cantarell"', "sans-serif"],
      }

    }
    

  },
  plugins: [
    require("flowbite/plugin")
  ],
  
}
