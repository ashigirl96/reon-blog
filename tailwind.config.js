module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgGoogle: '#1a1a1d',
        bgText: '#989A9E',
        yellow: '#9b9700',
        red: '#713a3c',
        white: '#e7eae8',
        green: '#395142',
        grays: '#454552',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'focus', 'active', 'hover'],
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
    // themes: [
    //   {
    //     mytheme: {
    //       primary: '#FF7AC6',
    //
    //       secondary: '#BF95F9',
    //
    //       accent: '#FFB86B',
    //
    //       neutral: '#414558',
    //
    //       'base-100': '#272935',
    //
    //       info: '#8BE8FD',
    //
    //       success: '#52FA7C',
    //
    //       warning: '#F1FA89',
    //
    //       error: '#FF5757',
    //     },
    //   },
    // ],
  },
}
