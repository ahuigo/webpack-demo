    const path = require('path');
    const CopyPlugin = require('copy-webpack-plugin');


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
    plugins:[       new CopyPlugin([
        { from: 'public', to: '.' }
        ])
    ],
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
