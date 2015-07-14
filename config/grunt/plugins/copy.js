module.exports = {
    build: {
        files: [
            {
                expand: true,
                cwd: 'src/',
                src: ['**/*.html'],
                dest: 'build/'
            }
        ]
    },
    test: {
        files: [
            {
                expand: true,
                flatten: true,
                src: ['src/js/**/*.js', 'tests/**/*.js'],
                dest: 'tmp/test/'
            }
        ]
    }
};
