module.exports = {
    test: {
        frameworks: ['jasmine', 'browserify'],
        files: [
            { pattern: 'src/js/sum.js' },
            { pattern: 'tests/**/*-test.js' }
        ],
        browsers: ['PhantomJS'],
        singleRun: false,
        preprocessors: {
            'src/js/sum.js': ['browserify'],
            'tests/**/*-test.js': ['browserify']
        },
        browserify: {
            transform: ['es6ify'],
            extensions: ['.js']
        }
    }
};
