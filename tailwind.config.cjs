/** @type {import('tailwindcss').Config} */

const radixColors = require('@radix-ui/colors')

function getRadixColors(object) {
  const newObject = {}
  Object.keys(object).forEach((item, index) => {
    newObject[index + 1] = object[item]
  })
  return newObject
}

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/antislipprofiles-ui/dist/**/*.{html,js,svelte,ts}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      heading: '"Open Sans", sans-serif',
      subheading: '"Open Sans", sans-serif',
      base: '"Open Sans", sans-serif',
      button: '"Open Sans", sans-serif',
    },
    fontWeight: {
      heading: 700,
      subheading: 600,
      base: 400,
      button: 500,
    },
    lineHeight: {
      heading: 1.125,
      subheading: 1.25,
      base: 1.625,
    },
    borderRadius: {
      box: '12px',
      card: '12px',
      image: '12px',
      button: '6px',
      input: '6px',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-themer')({
      themes: [
        {
          name: 'light',
          extend: {
            colors: {
              base: getRadixColors(radixColors.sand),
              'base-9-content': 'white',
            },
          },
        },
        {
          name: 'dark',
          extend: {
            colors: {
              base: getRadixColors(radixColors.sandDark),
              'base-9-content': 'white',
            },
          },
        },
        {
          name: 'light-orange',
          extend: {
            colors: {
              base: getRadixColors(radixColors.orange),
              'base-9-content': 'white',
            },
          },
        },
        {
          name: 'dark-orange',
          extend: {
            colors: {
              base: getRadixColors(radixColors.orangeDark),
              'base-9-content': 'white',
            },
          },
        },
      ],
    }),
    require('antislipprofiles-ui/plugin'),
  ],
}
