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
        files: [{
            expand: true,
            cwd: 'src/js',
            src: '**/*.js',
            dest: 'tmp/test'
        }, {
            expand: true,
            flatten: true,
            cwd: 'tests/',
            src: '**/*-test.js',
            dest: 'tmp/test'
        }]
    }
};
