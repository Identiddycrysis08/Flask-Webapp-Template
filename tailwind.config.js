/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./templates/**/*.html",
      "./static/src/**/*.js",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors:{
      "nav-black":"#161616",
      "":"",
      "":"",
    }

  },
  plugins: [
    require("flowbite/plugin")
  ],
  
}
