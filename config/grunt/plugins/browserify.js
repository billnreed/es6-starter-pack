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
    }
};