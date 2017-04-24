const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-babel');

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
    babel: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: {
          'dist/sw/sw.js': 'src/PushServiceWorker.js',
          'test/e2e/js/index.js': 'test/e2e/js/index.es6.js',
        },
      },
    },
    uglify: {
      my_target: {
        files: {
          'dist/leanplum.min.js': 'dist/leanplum.js',
          'dist/sw/sw.min.js': 'dist/sw/sw.js',
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
  grunt.registerTask('build', ['webpack:prod', 'babel', 'uglify']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['webpack:dev']);
};
