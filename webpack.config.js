    var webpack = require('webpack');
    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        mode: 'development',
        output: {
            filename: 'hello.js',
            path: path.resolve(__dirname, 'dist'),
            library: 'hello',
            libraryTarget: 'umd',
            globalObject: 'this',

        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
                'APP_VERSION': '"3.1.1"',
            })
        ]
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
