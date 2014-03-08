/*!
 * GitHub Flavored Markdown Stylesheet
 * https://github.com/github/gfm-stylesheet
 * Copyright 2014 GitHub, Inc.
 * Licensed under MIT (https://github.com/github/gfm-stylesheet/blob/master/LICENSE.md)
 */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*!\n' +
            ' * GitHub Flavored Markdown Stylesheet v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>).\n' +
            ' */\n',

    sass: {
      dist: {
        files: {
          'css/github-markdown.css': 'scss/github-markdown.scss'
        }
      }
    },

    csscomb: {
      options: {
        config: 'scss/.csscomb.json'
      },
      dist: {
        files: {
          'css/github-markdown.css': 'css/github-markdown.css'
        }
      }
    },

    cssmin: {
      options: {
        banner: '', // set to empty; see bellow
        keepSpecialComments: '*', // set to '*' because we already add the banner in sass
        noAdvanced: true, // disable advanced optimizations since it causes many issues
        report: 'min'
      },
      dist: {
        src: 'css/github-markdown.css',
        dest: 'css/github-markdown.min.css'
      }
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },
        files: {
          src: [
            'css/*.css'
          ]
        }
      }
    },

    watch: {
      scss: {
        files: [
          'scss/*.scss'
        ],
        tasks: ['sass']
      }
    }
  });

  // These plugins provide necessary tasks
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // Register the tasks
  grunt.registerTask('dist-css', ['sass', 'csscomb', 'cssmin', 'usebanner']);
  grunt.registerTask('dist', ['dist-css']);
  grunt.registerTask('build', ['dist']);
  grunt.registerTask('default', ['dist']);
};
