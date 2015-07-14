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
    }
};
