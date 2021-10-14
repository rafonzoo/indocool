const MiniCssExtractPlugin      = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const CssMinimizerPlugin        = require('css-minimizer-webpack-plugin');
const TerserPlugin              = require('terser-webpack-plugin');
const BrowserSyncPlugin         = require('browser-sync-webpack-plugin');

const path = require('path');

module.exports = (env, options) => {
  const production = options.mode === 'production';
  return ({
    stats   : 'minimal',
    mode    : options.mode || 'development',
    devtool : 'source-map',
    entry   : {
      'public/dist/js/built'  : path.resolve(__dirname, './src/js/built.js'),
      'public/dist/css/built' : path.resolve(__dirname, './src/scss/built.scss'),
    },
    module: {
      rules: [
        {
          test : /\.(js)$/,
          use  : [
            'babel-loader'
          ]
        },
        {
          test : /\.(s[ac]ss)$/,
          use  : [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ]
        },
      ]
    },
    plugins: [
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({
        filename      : `[name]${production ? '.min' : ''}.css`,
        chunkFilename : '[id].css'
      }),
      new BrowserSyncPlugin({
        port   : 3000,
        server : true,
        ui     : false,
        open   : true,
        files  : ['*.html', 'src/**/*.scss', 'src/**/*.js']
      })
    ],
    output: {
      filename : `[name]${production ? '.min' : ''}.js`,
      path     : path.resolve(__dirname, './'),
    },
    optimization: {
      minimize  : production ? true : false,
      minimizer : [
        new CssMinimizerPlugin({ test: /\.css$/i, }),
        new TerserPlugin({
          test   : /\.js$/i,
          minify : (input) => {
            const { map, code } = require('uglify-js').minify(input);
            return { map, code, warnings: [], errors: [], extractedComments: [] };
          },
        })
      ],
    }
  });
};
