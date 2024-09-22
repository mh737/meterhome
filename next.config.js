
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
};