module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{html,jsx,js}",
      "./node_modules/tw-elements-react/dist/js/**/*.js"
    ],
    theme: {
      extend: {
        keyframes: {
          typing: {
            "0%": {
              width: "0%",
              visibility: "hidden"
            },
            "100%": {
              width: "100%"
            }  
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "white"
            }  
          }
        },
        animation: {
          typing: "typing 3s steps(20) , blink .7s infinite"
        }
      },
    },
    darkMode: "class",
    plugins: [
      require("daisyui"),
      require('@tailwindcss/forms'),
      // require('@tailwindcss/aspect-ratio'),
      require("tw-elements-react/dist/plugin.cjs")
    ],
    // daisyui: {
    //   themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    //   darkTheme: "dark", // name of one of the included themes for dark mode
    //   base: true, // applies background color and foreground color for root element by default
    //   styled: true, // include daisyUI colors and design decisions for all components
    //   utils: true, // adds responsive and modifier utility classes
    //   prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    //   logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    //   themeRoot: ":root", // The element that receives theme color CSS variables
    // },
  }
