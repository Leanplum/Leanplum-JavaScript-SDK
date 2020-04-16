const webpackConfig = require('./webpack.config')

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-webpack')

  grunt.initConfig({
    clean: ['dist'],
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
        tasks: ['lint', 'compile']
      }
    },
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      dev: Object.assign({
        watch: true
      }, webpackConfig),
      prod: webpackConfig
    }
  })

  grunt.registerTask('compile', ['clean', 'webpack:prod'])
  grunt.registerTask('build', ['clean', 'webpack:prod', 'uglify'])
  grunt.registerTask('default', ['webpack:dev'])
}
