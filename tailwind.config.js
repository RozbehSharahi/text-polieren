/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  important: true,
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['Montserrat', 'Arial', 'sans'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      green: {
        600: '#33d521',
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e2e2',
        400: '#d9d9d9',
        500: '#a49b92',
        600: '#777777',
        700: '#454545',
        800: '#252525',
        900: '#111111',
      },
      blue: {
        100: '#ebf8ff',
        200: '#8494a7',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
      },
      pink: {
        600: '#ff4084',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#ee3e36',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
      primary: {
        default: '#c53030',
        600: '#c53030',
      },
    },
    spacing: {
      0: '0',
      1: '3px',
      2: '6px',
      3: '9px',
      4: '12px',
      5: '15px',
      6: '18px',
      7: '21px',
      8: '24px',
      9: '27px',
      10: '30px',
      11: '33px',
      12: '36px',
      14: '42px',
      16: '48px',
      20: '60px',
      24: '72px',
      28: '84px',
      33: '99px',
      36: '108px',
      100: '300px',
    },
    fontSize: {
      0.6: '0.6em',
      0.7: '0.7em',
      0.8: '0.8em',
      0.9: '0.9em',
      1: '1em',
      1.2: '1.2em',
      1.5: '1.5em',
      1.7: '1.7em',
      2: '2em',
      3: '3em',
      4: '4em',
    },
    backgroundOpacity: {
      10: '0.1',
      20: '0.2',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      95: '0.95',
    },
    lineHeight: {
      normal: 1,
      none: 1,
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      '275px': '275px',
      '320px': '320px',
      ...breakpoints(theme('screens')),
    }),
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    options: {
      whitelist: [],
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
