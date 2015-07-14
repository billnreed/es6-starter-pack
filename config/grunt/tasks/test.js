module.exports = function(grunt) {
    grunt.registerTask('test', ['clean:test', 'copy:test', 'karma:test']);
};
