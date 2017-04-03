module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        jshint: {
            files: [
                'lib/leanplum.js'
            ],
            options: {
                globals: {},
                jshintrc: '.jshintrc'
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            js: {
                files: {
                    'dist/leanplum.min.js': ['lib/leanplum.js']
                }
            }
        },
        watch: {
            js: {
                files: [
                    '<%= jshint.files %>',
                    '<%= uglify.js.src %>'
                ],
                tasks: ['jshint', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('build', ['uglify']);
    grunt.registerTask('default', ['watch']);
};