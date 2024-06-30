export default  {
    // purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'false', // or 'media' or 'class', 'false'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }