import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#0D0D0D',
        white: '#FFFFFF',
        'faint-white': '#F3F3F3',
        onyx: '#181818',
        'dark-gray': '#808080',
        gray: 'rgba(128, 128, 128, 0.5)',
        'light-gray': '#C5C5C5',
        'light-blue': 'rgba(63, 100, 234, 0.43)',
        'light-red': 'rgba(233, 63, 64, 0.43)',
        'light-yellow': 'rgba(255, 184, 0, 0.43)',
        'light-card-border': '#EBEBEB',
        'dark-card-border': '#383737',
        'light-card-bg': '#F6F6F6',
        'light-black': 'rgba(0, 0, 0, 0.1)',
        'dark-white': 'rgba(255, 255, 255, 0.1)',
        'dark-black': 'rgba(21, 21, 21, 0.5)',
        'blur-white': 'rgba(24, 24, 29, 0.3)',
        'blur-dark': 'rgba(24, 24, 29, 0.6)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
