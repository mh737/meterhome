const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
module.exports = withNextIntl(nextConfig);


  // next.config.js
module.exports = {
  // webpack5: false,  //wepack4
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    // if (!isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: false,
      };
    // }
    return config;
  },
 withNextIntl(nextConfig)
};
