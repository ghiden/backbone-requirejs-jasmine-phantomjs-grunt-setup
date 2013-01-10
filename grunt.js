module.exports = function(grunt) {
  grunt.initConfig({
    server: {
      port: 8000,
      base: '.'
    },

    watch: {
      files: ['test/spec/**/*.js', 'app/js/**/*.js', 'test/SpecRunner.js'],
      tasks: 'exec'
    },

    exec: {
      jasmine: {
        command: 'phantomjs test/lib/run-jasmine.js http://localhost:8000/test',
        stdout: true
      }
    }

  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', 'server exec watch');

}
