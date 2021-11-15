import openBrowser from 'react-dev-utils/openBrowser'
import { merge } from 'webpack-merge'

import { DevConfig } from './webpack'
import { common } from './webpack.common'

const API_HOST = 'http://localhost:8000'
const PORT = 3000

const config = merge(common as DevConfig, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
    proxy: {
      '/api': API_HOST
    },
    onListening: () => {
      openBrowser(`http://localhost:${PORT}`)
    }
  }
})

export default config
