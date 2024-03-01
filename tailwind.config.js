/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
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



      }
    },
  },
  plugins: [],
}

