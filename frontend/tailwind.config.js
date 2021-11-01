module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Source Sans Pro',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Rokkitt',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Courier Prime',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
      handwritten: ['Indie Flower', 'Roboto'],
    },
    extend: {
      colors: {
        offWhite: '#f8fafc',
        sageGreen: '#E8E8E4',
        mistyRose: '#FAE1DD',
        melon: '#FEC5BB',
        alabaster: '#D8E2DC',
        linen: '#ECE4DB',
        brandGray: '#212529',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
