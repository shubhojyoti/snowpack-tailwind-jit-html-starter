/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
      'src/html': { url: '/', static: true },
      'src/css': { url: '/assets/css' },
      'src/js': { url: '/assets/js' }
  },
  plugins: [
    '@snowpack/plugin-postcss'
  ],
};
