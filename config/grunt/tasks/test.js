module.exports = function(grunt) {
    grunt.registerTask('test', ['clean:build', 'karma:test']);
};
