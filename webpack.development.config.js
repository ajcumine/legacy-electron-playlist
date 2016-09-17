import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import path from 'path';

const port = process.env.PORT || 3000;

export default {
  entry: [
    `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr`,
    'babel-polyfill',
    './app/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/dist/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      },
      {
        test: /\.png|\.svg$/,
        loaders: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  target: 'electron-renderer',
};
