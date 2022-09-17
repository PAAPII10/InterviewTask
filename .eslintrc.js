module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    parser: '@babel/eslint-parser',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
