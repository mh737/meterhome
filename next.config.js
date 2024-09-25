const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
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
    }
  };
 
module.exports =  withNextIntl(nextConfig)

https://stackoverflow.com/questions/67165873/how-do-i-combine-several-module-exports-in-next-js-next-config-js
  ;