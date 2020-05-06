const PackageJson = require('../package.json');

const rewireExternals = (baseConfig) => {
  const config = baseConfig;
  const Package = PackageJson;
  delete Package.scripts;
  delete Package.devDependencies;
  
  const externals = {
    Package: JSON.stringify(Package),
  };

  config.externals = Object.assign({}, config.externals, externals);
  

  return config;
};

module.exports = rewireExternals;
