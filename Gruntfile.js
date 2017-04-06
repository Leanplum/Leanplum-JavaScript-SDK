module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-babel');

  grunt.initConfig({
    eslint: {
      target: ['lib/leanplum.js'],
    },
    babel: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: {
          'dist/leanplum.js': 'src/leanplum.js',
        },
      },
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
  grunt.registerTask('build', ['babel', 'uglify']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['watch']);
};
