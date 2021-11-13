import Webpack from 'webpack';
import DevServer from 'webpack-dev-server';

export type ProdConfig = Webpack.Configuration;

export interface DevConfig extends ProdConfig {
  devServer?: DevServer.Configuration;
}