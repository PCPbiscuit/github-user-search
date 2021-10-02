module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0079FF',
          ish: '#4B6A9B',
          dark: '#1E2A47',
        },
        gray: {
          DEFAULT: '#697C9A',
          ish: '#F6F8FF',
        },
        black: {
          DEFAULT: '#2B3442',
          ish: '#141D2F',
          dark: '#222731',
        },
        white: {
          DEFAULT: '#FFFFFF',
          ish: '#FEFEFE',
        },
      },
      fontSize: {
        xl: ['26px', '38px'],
        l: ['22px', '33px'],
        md: ['16px', '24px'],
        s: ['13px', '20px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
