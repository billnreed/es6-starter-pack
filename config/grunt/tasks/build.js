module.exports = function(grunt) {
    grunt.registerTask('build', ['clean:build', 'babel:build', 'browserify:build', 'copy:build']);
};