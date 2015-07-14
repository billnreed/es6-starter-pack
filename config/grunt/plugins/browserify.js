module.exports = {
    build: {
        options: {
            browserifyOptions: {
                debug: true
            },
            transform: ['es6ify']
        },
        files: {
            'build/js/app.js': ['src/js/**/*.js']
        }
    },
    test: {
        options: {
            transform: ['es6ify']
        },
        files: {
            'tmp/test/bundle.js': ['tmp/test/**/*.js']
        }
    }
};
