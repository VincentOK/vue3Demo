module.exports = {
  extends: ['alloy', 'alloy/vue', 'alloy/typescript', 'prettier'],
  plugins: ['prettier', 'vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      // tsx: true, // Allows for the parsing of JSX
      jsx: true,
    },
  },
  // settings: {
  //   tsx: {
  //     version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
  //   }
  // },
  env: {
      // 你的环境变量（包含多个预定义的全局变量）
      //
      // browser: true,
      node: true
      // mocha: true,
      // jest: true,
      // jquery: true
  },
  settings: {
      'import/resolver': {
          alias: {
              map: [['@', './src']],
              extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
          }
      }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // 自定义你的规则
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/component-tags-order': [
        'error',
        {
            order: ['template', 'script', 'style']
        }
    ]
  },
};