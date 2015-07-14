module.exports = {
    test: {
        frameworks: ['jasmine', 'browserify'],
        files: [
            { pattern: 'tmp/test/**/*.js' }
        ],
        browsers: ['PhantomJS'],
        singleRun: true,
        preprocessors: {
            'tmp/test/**/*.js': ['browserify']
        },
        browserify: {
            transform: ['es6ify'],
            extensions: ['.js']
        }
    }
};
