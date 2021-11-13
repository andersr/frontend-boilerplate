import HtmlWebpackPlugin from 'html-webpack-plugin';

const FILE_LOADER = 'file-loader';

export const common: unknown = {
  entry: ['babel-polyfill', './src/main.tsx'],
  target: ['web', 'es5'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/i,
        loader: FILE_LOADER,
        options: {
          name: 'fonts/[name].[ext]'
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: FILE_LOADER,
        options: {
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.tsx?/,
        loader: 'awesome-typescript-loader',
        options: {
          errorsAsWarnings: true, // TODO: only for dev?
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './webpack/templates/index.html',
      title: 'Default page title'
    })
  ]
}