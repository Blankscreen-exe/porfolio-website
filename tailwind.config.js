module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{html,jsx,js}",
      "./node_modules/tw-elements-react/dist/js/**/*.js"
    ],
    theme: {
      color:{
        "primary-light": "#0694a2",
        "secondary-light": "#c4c4c4",
        "tertiary-light": "#f1f5f9",
        "contrast-light": "#dc4c64",
      
        "primary-dark": "#30C3D2",
        "secondary-dark": "#8a8a8a",
        "tertiary-dark": "#4B5660",
        "contrast-dark": "#FC5E79"
      },
      extend: {
        brightness: {
          10: '.10',
          15: '.15',
          20: '.20',
          25: '.25',
          175: '1.75',
        },
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
          },
        },
        animation: {
          typing: "typing 3s steps(20) , blink .7s infinite"
        }
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
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
