module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  globals: {
    __DEV__: true,
  },
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.js'],
  testEnvironment: 'jsdom',
};
