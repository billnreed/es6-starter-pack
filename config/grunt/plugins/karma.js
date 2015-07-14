module.exports = {
    test: {
        frameworks: ['jasmine', 'es6-shim'],
        files: ['tmp/test/bundle.js'],
        browsers: ['PhantomJS'],
        singleRun: true
    }
};
