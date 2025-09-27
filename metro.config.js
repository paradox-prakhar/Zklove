const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  ...defaultConfig,
  transformer: {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve('react-native-css-transformer'),
    minifierPath: require.resolve('metro-minify-terser'),
  },
  resolver: {
    ...defaultConfig.resolver,
    sourceExts: [...defaultConfig.resolver.sourceExts, 'css', 'scss', 'sass'],
    assetExts: [...defaultConfig.resolver.assetExts, 'css'],
    extraNodeModules: {
      ...defaultConfig.resolver.extraNodeModules,
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer'),
      process: require.resolve('process/browser'),
    },
    blockList: [
      /.*\.win32-x64-msvc\.node$/,
      /.*\.android.bundle$/,
      /.*\.ios.bundle$/,
      ...(defaultConfig.resolver.blockList || []),
    ],
  },
};

module.exports = config;
