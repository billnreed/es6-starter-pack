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
    test: {
        files: ['src/js/**/*.js', 'tests/**/*-test.js'],
        tasks: ['test']
    },
    Gruntfile: {
        options: {
            reload: true
        },
        files: 'Gruntfile.js'
    }
};
