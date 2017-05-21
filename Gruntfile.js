module.exports = function(grunt) {
	grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'grafika/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'grafika/build/'
        }]
      },
    },
    watch: {
      scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
      } 
    }

  })
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'imagemin', 'watch']);



};