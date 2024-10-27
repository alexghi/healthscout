// tailwind.config.js
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // Ensure this includes all directories in the `app` folder
      './pages/**/*.{js,ts,jsx,tsx}', // If you're using a `pages` directory, include this
      './components/**/*.{js,ts,jsx,tsx}', // Your components directory
    ],
    theme: {
      extend: {
        colors: {
          'dark-blue': '#1a1b36',
          'light-green': '#34d399',
          'light-blue': '#60a5fa',
          'gray-300': '#d1d5db',
        },
      },
    },
    plugins: [],
  };
