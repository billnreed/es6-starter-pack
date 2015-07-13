module.exports = {
    build: {
        options: {
            livereload: true
        },
        files: 'build/**/*.*'
    },
    js: {
        files: 'src/js/**/*.js',
        tasks: ['babel:build', 'browserify:build']
    },
    html: {
        files: 'src/**/*.html',
        tasks: ['copy:build']
    },
    Gruntfile: {
        options: {
            reload: true
        },
        files: 'Gruntfile.js'
    }
};