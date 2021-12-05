import fs from 'fs';

const cert = fs.readFileSync('/Users/shubhatt/.certbot/config-dir/live/shubhomeet.net/fullchain.pem');
const key = fs.readFileSync('/Users/shubhatt/.certbot/config-dir/live/shubhomeet.net/privkey.pem');

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
  devOptions: {
    secure: { cert, key },
    hostname: 'html.shubhomeet.net'
  }
};
