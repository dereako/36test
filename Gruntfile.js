module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "build/styles.css": "src/styles.less" // destination file and source file
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'build/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
	  scripts: {
		  files: ['<%= jshint.files %>'],
		  tasks: ['jshint'],
          options: {
			spawn: false,
		  },
	  }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default tasks
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['jshint']);

};