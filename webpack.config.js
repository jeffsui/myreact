var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //entry:path.resolve(__dirname,'app/main.js'),
    devtool: 'eval-source-map',
    entry:[
          //'webpack/hot/dev-server',
         // 'webpack-dev-server/client?http://localhost:8080',
          path.resolve(__dirname,'app/main.js')
    ],
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    // resolve: {
    //     //  modulesDirectories: ['node_modules']
    //     extensions: ['','js','jsx']
    // },
    devServer: {
        hot: true,
        inline: true,
        progress: true
     },
    module:{
      loaders:[{
        //test:/\.css$/,
        //loader:'style!css'
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets:['es2015','react']
        }
      }]
      
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    
    ]
};
