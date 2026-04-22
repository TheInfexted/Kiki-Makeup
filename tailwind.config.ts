import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5EFE6',
        espresso: '#2A1D12',
        warmbrown: '#5C4230',
        caramel: '#8B6B48',
        tan: '#C8A882',
        surface: '#FFFFFF'
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', '"Noto Serif SC"', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', '"Noto Serif SC"', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        eyebrow: '0.25em'
      },
      maxWidth: {
        content: '720px'
      }
    }
  },
  plugins: []
};

export default config;
