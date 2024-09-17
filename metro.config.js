const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules = {
  'react-native/Libraries/Utilities/LoadingView': require.resolve('react-native/Libraries/Components/ActivityIndicator/ActivityIndicator'),
};

module.exports = defaultConfig;
