var path = require('path');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var scssIncludePaths = [
  path.resolve(__dirname, './example/bower_components'),
  path.resolve(__dirname, './node_modules')
];

module.exports = {
  entry: {
    app: path.resolve(__dirname, './example/app.js')
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: ''
  },
  resolve: {
    extensions: ['', '.jsx', '.js'],
    alias: {
      example: path.resolve(__dirname, './example'),
      test: path.resolve(__dirname, './test')
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?stage=0'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: extractTextWebpackPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.scss$/,
        loader: extractTextWebpackPlugin.extract('style-loader', 'css-loader!sass-loader?outputStyle=expanded&' + scssIncludePaths.join('&includePaths[]='))
      },
      {
        test: /\.sass$/,
        loader: extractTextWebpackPlugin.extract('style-loader', 'css-loader!sass-loader?indentedSyntax=sass')
      },
      {
        test: /\.less$/,
        loader: extractTextWebpackPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new extractTextWebpackPlugin('[name].css')
  ],
  stats: {
    children: false
  },
  eslint: {
    configFile: path.resolve(__dirname, './.eslintrc')
  }
};
