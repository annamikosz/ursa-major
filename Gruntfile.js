module.exports = function(grunt) {
	grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'style.css': 'style.sass'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'image/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'build/'
        }]
      },
    },
    watch: {
      scripts: {
        files: ['*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
      } 
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
              'app/css/*.css',
              'app/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './app'
        }
      }
    }
  })
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);


};