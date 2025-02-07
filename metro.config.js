const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { generate } = require('@storybook/react-native/scripts/generate');

// generate({
//   configPath: path.resolve(__dirname, './.storybook'),
// });

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.transformer.unstable_allowRequireContext = true;

config.resolver.sourceExts.push('mjs');

module.exports = {

  transformer: {
    unstable_allowRequireContext: true,
  },
  resolver: {
    sourceExts: [...config.resolver.sourceExts, 'mjs'],
  },
};