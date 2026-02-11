import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
        },
        secondary: {
          50: '#F4F4F5',
          100: '#E4E4E7',
          200: '#D4D4D8',
          300: '#A1A1AA',
          400: '#71717A',
          500: '#52525B',
          600: '#3F3F46',
          700: '#27272A',
          800: '#18181B',
          900: '#09090B',
        },
        accent: {
          50: '#F5F3F0',
          100: '#E8E3DC',
          200: '#D4C9BA',
          300: '#BAAA94',
          400: '#9E8A6F',
          500: '#7D6B54',
          600: '#655544',
          700: '#4D4136',
          800: '#3A312A',
          900: '#2A2319',
        },
      },
    },
  },
  plugins: [],
};

export default config;
