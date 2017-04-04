module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    eslint: {
      target: ['lib/leanplum.js'],
    },
    uglify: {
      options: {
        mangle: true,
      },
      js: {
        files: {
          'dist/leanplum.min.js': ['lib/leanplum.js'],
        },
      },
    },
    watch: {
      js: {
        files: [
          'lib/leanplum.js',
        ],
        tasks: ['eslint', 'uglify'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('build', ['uglify']);
  grunt.registerTask('default', ['watch']);
};
