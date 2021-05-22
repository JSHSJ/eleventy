const { config } = require('@swc/core/spack');
const path = require('path');

module.exports = config({
  entry: {
    build: path.join(__dirname, 'src/js/main.ts'),
  },

  output: {
    path: path.join(__dirname, 'src/js'),
    name: 'main.js',
  },

  options: {
    jsc: {
      target: 'es5',
      parser: {
        syntax: 'typescript',
      },
    },
    env: {
      // path to package.json which includes browserslist field
      path: '.',
    },
  },
});
