const webpackConfig = require('./webpack.config')
const libraryName = 'Leanplum'

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-eslint')
  grunt.loadNpmTasks("grunt-ts")
  grunt.loadNpmTasks('grunt-webpack')

  grunt.initConfig({
    clean: {
      dist: ['dist'],
      dts: ['dist/src']
    },
    eslint: {
      target: ['lib/leanplum.js']
    },
    ts: {
      dts: {
        options: {
          fast: 'never'
        },
        tsconfig: './tsconfig.dts.json'
      }
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

  grunt.registerTask('bundle:dts', function () {
    require('dts-bundle').bundle({
      name: libraryName,
      main: './dist/src/Leanplum.d.ts',
      out: '../leanplum.d.ts',
      removeSource: true,
      headerText: `
 *
 *  Copyright 2020 Leanplum Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *`,
      outputAsModuleFolder: true
    })
  })

  grunt.registerTask('lint', ['eslint'])
  grunt.registerTask('compile', ['clean:dist', 'webpack:prod'])
  grunt.registerTask('build', ['clean:dist', 'ts:dts', 'bundle:dts', 'clean:dts', 'webpack:prod', 'uglify'])
  grunt.registerTask('default', ['webpack:dev'])
}
