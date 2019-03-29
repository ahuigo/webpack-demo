# HMR
There are two method for HMR:

   npx webpack-dev-server --open; # npm start
   node dev-server.js

Modify src/print.js to see what will happen.

# production env

## build for different env
    "build": "webpack --config webpack.prod.js",
    "start": "webpack-dev-server --open --config webpack.dev.js",

### production
当配置了mode prod 后，环境变量会拿到.

    //src/index.js
    if (process.env.NODE_ENV !== 'production') {
        console.log('Looks like we are in development mode!');
    }

