var path = require('path');

module.exports = {
  entry: './lib/inifiniwars.js',
  output: {
    filename: './assets/javascripts/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
