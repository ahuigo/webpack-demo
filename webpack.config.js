    const path = require('path');

    module.exports = {
      entry: './src/index.js',
    mode:'development',
      output: {
        filename: 'hello.js',
        path: path.resolve(__dirname, 'dist'),
       library: 'hello',
       libraryTarget: 'umd',
      globalObject: 'this',
       //libraryTarget: 'commonjs',

      },
        /*
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader'
                }
            ]
        },
        */
    };
