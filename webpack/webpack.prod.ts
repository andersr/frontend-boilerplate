import { merge } from 'webpack-merge'

import { ProdConfig } from './webpack'
import { common } from './webpack.common'

const config = merge(common as ProdConfig, {
  mode: 'production',
  output: {
    filename: '[name].[fullhash].js'
  }
})

export default config
