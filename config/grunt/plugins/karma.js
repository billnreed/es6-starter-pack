module.exports = {
    test: {
        frameworks: ['jasmine', 'traceur'],
        files: [
            { pattern: 'tests/**/*.js' }
        ],
        browsers: ['Chrome'],
        singleRun: true,
        preprocessors: {
            'tests/**/*.js': ['traceur']
        },
        traceurPreprocessor: {
            options: {
                modules: 'commonjs'
            }
        }
    }
};
