const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xlr': [
          'clamp(1rem, 1vw + 0.7rem,1.5rem)',
          'clamp(2rem, 2vw + 1rem,3.5rem)',
        ],
        '5xlr': [
          'clamp(1.875rem, 3vw + 1rem,3rem)',
          'clamp(2.25rem, 3vw + 1rem,4.5rem)',
        ],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const fonts = {
        '.font-tavi': {
          fontFamily: '"Taviraj", serif',
        },
        '.font-source': {
          fontFamily: '"Source Sans Pro", sans-serif',
        },
        '.font-Glamode': {
          fontFamily: '"Glamode", sans-serif',
        },
        '.bg-gold-gradient': {
          background: 'linear-gradient(180deg, #F9D39000 0%, #E2B15B44 100%)',
        },
        '.bg-gold-gradient-strong': {
          background: 'linear-gradient(180deg, #F9D39000 0%, #E2B15BFF 100%)',
        },
        '.bg-gold-gradient-sm': {
          background: 'linear-gradient(180deg, #F9D390 0%, #E2B15B 100%)',
        },
        '.bg-black-gradient': {
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 65%, rgba(255,255,255,0) 100%)',
        },
        '.bg-gold-gradient-inv': {
          background: 'linear-gradient(0deg, #F9D39000 0%, #E2B15B66 140%)',
        },
        '.bg-gold': {
          background: 'var(--gold)',
        },
        '.bg-gold-light': {
          background: 'var(--gold-light)',
        },
        '.bg-bluepurple-gradient': {
          background: 'var(--black-blue-grad)',
        },
        '.bg-bluegreen-gradient': {
          background:
            'linear-gradient(180deg, #002452 -20%, rgba(0, 19, 44, 0.8) 100%)',
        },
        '.bg-disable': {
          background: '#c2c2c2',
        },
        '.text-gold': {
          color: 'var(--gold)',
        },
        '.text-gold-light': {
          color: 'var(--gold-light)',
        },
        '.text-gold-gradient': {
          background:
            '-webkit-linear-gradient(180deg, #F9D390 0%, #E2B15B 100%)',
          ' -webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-disable': {
          color: '#767676',
        },
        '.border-gold-light': {
          borderColor: 'var(--gold-light)',
        },
        '.hole': {
          boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.6)',
        },
      }

      addUtilities(fonts)
    }),
  ],
}
