module.exports = function(grunt) {
  // time grunt will display amount of time tasks take
  require('time-grunt')(grunt);
  // this helper automatically "requires" all the grunt modules used
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {  
      development: {
        options: {
          paths: ['css']
        },
        files: {
          'css/styles.css': 'css/styles.less'
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/*.css',
            '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },

    postcss: {
      options: {
        map: false, // inline sourcemaps
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions', '> 1%', 'ie 9', 'Firefox ESR']
          }),
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },

    watch: {
      less: {
        files: ['css/*.less'],
        tasks: ['less', 'postcss'],
        options: {
          spawn: false,
        }
      },
    },
      
  });

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', [
    'less',
    'postcss',
    'browserSync',
    'watch'
  ]);
};