const path = require('path');

const rewireAbsoluteSrcResolve = (config) => {
  config.resolve.modules = [path.resolve('src')].concat(config.resolve.modules);
  return config;
};

module.exports = rewireAbsoluteSrcResolve;
