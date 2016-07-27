 var debug = process.env.NODE_ENV !== "production";
 var webpack = require('webpack');
 var path = require('path');

 module.exports = {
     context: path.join(__dirname, "src"),
     devtool: debug ? "inline-sourcemap" : null,
     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /(node_modules|bower_components)/,
             loader: 'babel-loader',
             query: {
                 presets: ['react', 'es2015', 'stage-1'],
                 plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
             }
         }]
     },
     entry: "./layout.js",
     output: {
         path: __dirname + "/src",
         filename: "layout.min.js"
     },
     plugins: debug ? [] : [
         new webpack.optimize.DedupePlugin(),
         new webpack.optimize.OccurenceOrderPlugin(),
         new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
     ],
 };
