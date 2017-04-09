const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.initConfig({
    eslint: {
      target: ['lib/leanplum.js'],
    },
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
      },
      prod: webpackConfig,
      dev: Object.assign({
        watch: true,
      }, webpackConfig),
    },
    uglify: {
      options: {
        mangle: true,
      },
      js: {
        files: {
          'dist/leanplum.min.js': ['dist/leanplum.js'],
        },
      },
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: false,
          noFail: false,
          require: ['mock-local-storage',
            'test/specs/helpers/setup.js',
            'test/specs/helpers/chai.js',
          ],
        },
        src: ['test/**/*.js'],
      },
    },
    watch: {
      js: {
        files: [
          'lib/leanplum.js',
        ],
        tasks: ['lint', 'build', 'test'],
      },
    },
  });

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('build', ['webpack:prod', 'uglify']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['webpack:dev']);
};
