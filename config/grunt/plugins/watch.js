module.exports = {
    build: {
        options: {
            livereload: true
        },
        files: 'build/**/*.*'
    },
    js: {
        files: 'src/js/**/*.js',
        tasks: ['browserify:build']
    },
    html: {
        files: 'src/**/*.html',
        tasks: ['copy:build']
    },
    tests: {
        files: ['src/js/**/*.js', 'tests/**/*.js'],
        tasks: ['browserify:test', 'karma:test']
    },
    Gruntfile: {
        options: {
            reload: true
        },
        files: 'Gruntfile.js'
    }
};
