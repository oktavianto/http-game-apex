const common = require('./webpack.common');

module.exports = Object.assign(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    client: false,
    hot: true,
    port: 4040,
    static: {directory: common.output.path}
  },
  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader']
    }]
  }
});
