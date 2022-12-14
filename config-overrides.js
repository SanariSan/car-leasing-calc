const webpack = require('webpack');

console.log('@ using react-rewired @');

// cra v5 issue https://github.com/facebook/create-react-app/issues/11756
module.exports = {
  webpack: function (config, env) {
    /**
     * when ejecting do this instead (?)
     * In config/paths.js change appIndexJs from resolveModule(resolveApp, 'src/index') to resolveModule(resolveApp, 'src/logic/index').
     * In package.json change scripts:
     * "start": "node scripts/start.js", "build": "node scripts/build.js", "test": "node scripts/test.js"
     */

    // console.dir(config, { depth: 5 });
    config.entry = config.entry.replace(new RegExp('index.ts$'), 'logic\\index.tsx');
    console.log('entry point changed:', config.entry);

    config.resolve.fallback = {
      url: require.resolve('url'),
      assert: require.resolve('assert'),
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer'),
      stream: require.resolve('stream-browserify'),
      process: require.resolve('process'),
      events: require.resolve('events'),
      util: require.resolve('util'),
      // fs: require.resolve('fs'),
      // http: require.resolve('stream-http'),
      // https: require.resolve('https-browserify'),
      // os: require.resolve('os-browserify/browser'),
    };
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
    );

    return config;
  },
};
