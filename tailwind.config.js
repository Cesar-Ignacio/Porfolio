const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");


const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {

    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 5s linear .50s infinite",
        scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    
      colors: {
        'silver': {
          '50': '#f7f7f7',
          '100': '#ededed',
          '200': '#dfdfdf',
          '300': '#cbcbcb',
          '400': '#adadad',
          '500': '#999999',
          '600': '#888888',
          '700': '#7b7b7b',
          '800': '#676767',
          '900': '#545454',
          '950': '#363636',
        },
        'fountain-blue': {
          '50': '#ebfffc',
          '100': '#cdfffb',
          '200': '#a1fffa',
          '300': '#60fff9',
          '400': '#18f8f4',
          '500': '#00dede',
          '600': '#00adb5',
          '700': '#088c96',
          '800': '#10707a',
          '900': '#125d67',
          '950': '#053e47',
        },
        'gallery': {
          '50': '#f8f8f8',
          '100': '#eeeeee',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        'mako': {
          '50': '#f4f6f7',
          '100': '#e3e8ea',
          '200': '#cad2d7',
          '300': '#a4b1bc',
          '400': '#788998',
          '500': '#5c6d7e',
          '600': '#4f5b6b',
          '700': '#454e59',
          '800': '#3d444d',
          '900': '#393e46',
          '950': '#21252b',
        },
        'shark': {
          '50': '#f6f7f9',
          '100': '#eceff2',
          '200': '#d4dbe3',
          '300': '#aebccb',
          '400': '#8297ae',
          '500': '#637b94',
          '600': '#4e637b',
          '700': '#405064',
          '800': '#384454',
          '900': '#323c48',
          '950': '#222831',
        },
        'firefly': {
          '50': '#f5f8f8',
          '100': '#ddeae7',
          '200': '#bad5d1',
          '300': '#90b8b3',
          '400': '#689994',
          '500': '#4e7e7a',
          '600': '#3d6462',
          '700': '#335250',
          '800': '#2c4342',
          '900': '#283938',
          '950': '#1a2b2b',
      },
      
      },

      fontFamily:{
        'righteous':['Righteous'],
        'onest':['Onest'],
        'nunito':['Nunito'],
        'poppins':['Poppins']
      }

    },
  },
  plugins: [require("tailwindcss-animate"),
  addVariablesForColors,
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "bg-grid": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-grid-small": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-dot": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  },],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
  
}