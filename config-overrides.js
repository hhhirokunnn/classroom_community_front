const { rewireExternals } = require('./rewired-config');

/* config-overrides.js */

module.exports = function override(config, env) {
  // config = rewireExternals(config, env);

  return config;
};
