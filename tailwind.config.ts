import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        valencia: "valencia",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scrollingAnimation: {
          // from: {
          //   transform: "translateY(0px)"
          // },
          // to: {
          //   transform: "translateY(400px)"
          // }

          ' 0%': { transform: "translateY(0px)" },
          '50%': { transform: "translateY(calc(-100% + 101px))" },
          '100%': { transform: "translateY(0px)" }


        },
        scrollingAnimationFast: {
          ' 0%': { transform: "translateY(0px)" },
          '50%': { transform: "translateY(calc(101px))" },
          '100%': { transform: "translateY(0px)" }
        },
        titleDivAnimation: {
          from: {
            top: '20rem',
            height: "22rem"
          },
          to: {
            top: "100%",
            height: "0vh"
          }
        },
        titleAnimation: {
          from: {
            top: '100px',
          },
          to: {
            top: "0px",
          }
        },
        sectionRightAnimation: {
          from: {
            transform: 'translateX(-200px)',
          },
          to: {
            transform: "translateX(400px)",
          }
        },
        sectionLeftAnimation: {
          from: {
            transform: 'translateX(900px)',
          },
          to: {
            transform: "translateX(100px)",
          }
        },
        appDataAnimation: {
          '0%': {
            opacity: "0"
          },
          '90%': {
            opacity: "0"
          },
          '100%': {
            opacity: "1"
          }
        },
        appDataDivAnimation: {

          '0%': {
            transform: "scaleX(0.2)",
            transformOrigin: '0%'
          },
          '50%': {
            transform: "scaleX(1)",
            transformOrigin: '0%'

          },
          '70%': {
            transform: "scaleX(1)",
            transformOrigin: '100%'

          },
          '100%': {
            transform: "scaleX(0)",
            transformOrigin: '100%'
          }
        }


      },
      animation: {
        scrollRegular: "scrollingAnimation linear",
        scrollFast: "scrollingAnimationFast ease-in",
        divTitle: "titleDivAnimation 2s linear 1s 1 normal forwards",
        nameTitle: "titleAnimation 1s ease 1s 1 normal forwards",
        jobTitle: "titleAnimation 1.3s ease 1.2s 1 normal forwards",
        rightAnimation: "sectionRightAnimation linear",
        leftAnimation: "sectionLeftAnimation linear",
        appDiv: "appDataDivAnimation 0.6s ease forwards",
        appData: "appDataAnimation 0.5s ease forwards",
      }


    },
  },
  plugins: [],
};
export default config;
