module.exports = function(grunt) {
    grunt.registerTask('test', ['clean:test', 'copy:test', 'browserify:test', 'karma:test']);
}
