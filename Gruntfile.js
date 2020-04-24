const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const clone = require('lodash.clonedeep')
const webpackConfig = require('./webpack.config')

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-webpack')

  grunt.initConfig({
    clean: ['dist'],
    webpack: {
      options: {
        stats: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') && {
          all: false,
          assets: true,
          chunks: false,
          entrypoints: false,
          errorDetails: false,
          errors: true,
          excludeAssets: [ /\.d\.ts$/ ],
          hash: false,
          logging: 'error',
          performance: false,
          warnings: false,
        }
      },
      dev: getWebpackDevConfig(webpackConfig),
      prod: webpackConfig
    }
  })

  grunt.registerTask('build', ['clean', 'webpack:prod'])
  grunt.registerTask('default', ['webpack:dev'])
}

function getWebpackDevConfig(webpackConfig) {
  const config = clone(webpackConfig.find((x) => x.output.filename === 'leanplum.js'))

  config.plugins = [new ForkTsCheckerWebpackPlugin({
    compilerOptions: {
      declaration: false,
    },
    silent: false,
  })]

  const loader = config.module.rules.find((x) => x.loader === 'ts-loader')

  loader.options = {
    compilerOptions: {
      declaration: false,
    },
    transpileOnly: true
  }

  return Object.assign(config, { watch: true })
}
