module.exports = {
    build: {
        options: {
            sourceMaps: true
        },
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['js/**/*.js'],
            dest: 'tmp/'
        }]
    }
};