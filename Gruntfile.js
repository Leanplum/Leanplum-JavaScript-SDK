const webpackConfig = require('./webpack.config')

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-webpack')

  grunt.initConfig({
    clean: ['dist'],
    watch: {
      js: {
        files: [
          'lib/leanplum.js'
        ],
        tasks: ['build']
      }
    },
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
      dev: Object.assign({
        watch: true
      }, webpackConfig.find((x) => x.output.filename === 'leanplum.js')),
      prod: webpackConfig
    }
  })

  grunt.registerTask('build', ['clean', 'webpack:prod'])
  grunt.registerTask('default', ['webpack:dev'])
}
