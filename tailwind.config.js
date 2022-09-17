const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgs1' : "url('../public/bgs1.png')",
        'bgs2' : "url('../public/bgs2.png')",
        'bgs3' : "url('../public/bgs3.png')",
        'bgs4' : "url('../public/bgs4.png')",
        'bgs5' : "url('../public/bgs5.png')",
        'bgs6' : "url('../public/bgs6.svg')",
        'bgs7' : "url('../public/bgs7.png')",
        'bgs7m' : "url('../public/bgs7m.svg')",
        'bgs6m' : "url('../public/bgs6m.svg')",
        'bgs5m' : "url('../public/bgs5m.svg')",
        'bgs1m' : "url('../public/bgs1m.png')",
        'bgs2m' : "url('../public/bgs2m.svg')",
        'bgs4m' : "url('../public/bgs4m.png')",
      },
      
      fontSize: {
        '2xlr': [
          'clamp(1rem, 1vw + 0.7rem,1.5rem)',
          'clamp(2rem, 2vw + 1rem,3.5rem)',
        ],
        '5xlr': [
          'clamp(1.875rem, 3vw + 1rem,3rem)',
          'clamp(2.25rem, 3vw + 1.2rem,4.5rem)',
        ],
      },
    },
    screens: {
      'xsm': '400px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '2xlm': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'fscreen': '1920px',
      // => @media (min-width: 1536px) { ... }
      'fscreenm': {'max': '1919px'},
      // => @media (max-width: 1535px) { ... }

      'xlm': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lgm': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mdm': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'smm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xsmm': {'max': '399px'},
      'pr': {'max': '816px'},
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-textshadow'),
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
        '.font-Josefin': {
          fontFamily: '"Josefin", sans-serif',
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
        '.bg-black-gradient': {
          background:
            'linear-gradient(180deg, #12151A 0%, rgba(15, 22, 36, 0.93) 39.58%, rgba(14, 22, 37, 0.96) 48.96%, rgba(14, 22, 38, 0.87) 56.77%, rgba(13, 22, 39, 0.79) 61.44%, rgba(13, 23, 41, 0.67) 67.71%, rgba(14, 23, 40, 0.57) 72.44%, rgba(17, 26, 43, 0.45) 77.6%, rgba(18, 22, 32, 0) 100%)',
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
