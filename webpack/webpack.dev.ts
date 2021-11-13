import { merge } from 'webpack-merge'
import { DevConfig } from './webpack';
import { common } from './webpack.common';

const API_HOST = 'http://localhost:8000';

const config = merge(common as DevConfig, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/api': API_HOST
    }
  }
});

export default config;