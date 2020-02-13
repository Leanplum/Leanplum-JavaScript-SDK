const webpackConfig = require('./webpack.config')

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-eslint')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-webpack')

  grunt.initConfig({
    eslint: {
      target: ['lib/leanplum.js']
    },
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign({
        watch: true
      }, webpackConfig)
    },
    uglify: {
      my_target: {
        files: {
          'dist/leanplum.min.js': 'dist/leanplum.js',
          'dist/sw/sw.min.js': 'dist/sw/sw.js'
        }
      }
    },
    watch: {
      js: {
        files: [
          'lib/leanplum.js'
        ],
        tasks: ['lint', 'build']
      }
    }
  })

  grunt.registerTask('lint', ['eslint'])
  grunt.registerTask('build', ['webpack:prod', 'uglify'])
  grunt.registerTask('default', ['webpack:dev'])
}
