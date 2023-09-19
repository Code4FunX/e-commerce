import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D6EFD',
        secondary: '#E3F0FF',
        gray: {
          300: '#DEE2E7',
          400: '#A9ACB0',
          500: '#8B96A5',
          600: '#505050',
        },
        dark: {
          DEFAULT: '#1C1C1C',
        },
        orange: '#F38332',
        cyan: '#55BDC3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
