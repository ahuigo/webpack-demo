    const path = require('path');

    module.exports = {
      entry: './src/index.js',
    mode:'development',
      output: {
        filename: 'hello.js',
        path: path.resolve(__dirname, 'dist'),
       library: 'hello',
       //libraryTarget: 'umd',
       libraryTarget: 'commonjs',

      }
    };
