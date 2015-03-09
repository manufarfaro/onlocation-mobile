module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      target: {
        files: {
          'public/js/app.min.js': [
          'public/vendor/jquery/dist/jquery.js',
          'public/vendor/bootstrap-sass-official/assets/javascripts/bootstrap.min.js',
          'public/vendors/slick.js/slick/slick.js',
          'public/js/main.js'
          ]
        }
      }
    },
    copy: {
          main: {
            files: [
          {expand: true, flatten: true, src: ['public/vendor/font-awesome-sass/assets/fonts/font-awesome/*'], dest: 'public/fonts/font-awesome/', filter: 'isFile'},
        {expand: true, flatten: true, src: ['public/vendor/bootstrap-sass-official/assets/fonts/bootstrap/*'], dest: 'public/fonts/', filter: 'isFile'}
        ]
      }
    },
    watch: {
      files: ['<%= jshint.files %>', 'public/sass/*', 'public/js/main.js'],
      tasks: ['jshint', 'uglify', 'sass']
    },
    sass: {
      dist: {
        files: {
          'public/css/app.min.css': 'public/sass/main.scss'
        }
      }
    },
    connect: {
      server: {
        options: {
          keepalive: true,
          livereload: true,
          port: 9001,
          base: {
            path: '.',
            options: {
              index: 'index.html'
            }
          }
        }
      }
    }
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('build', ['jshint', 'sass', 'uglify', 'copy:main']);

grunt.registerTask('default', ['build', 'watch']);

};
