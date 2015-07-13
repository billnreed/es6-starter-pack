module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            build: ['build/'],
            dist: ['dist/']
        },
        copy: {
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
        },
        babel: {
            build: {
                options: {
                    sourceMaps: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['js/**/*.js'],
                    dest: 'build/'
                }]
            }
        },
        connect: {
            build: {
                options: {
                    port: 9000,
                    base: 'build/',
                    open: true,
                    livereload: true
                }
            }
        },
        watch: {
            build: {
                options: {
                    livereload: true
                },
                files: 'build/**/*.*',
                tasks: []
            },
            js: {
                files: 'src/js/**/*.js',
                tasks: ['babel:build']
            },
            html: {
                files: 'src/**/*.html',
                tasks: ['copy:build']
            }
        }
    });

    grunt.registerTask('build', ['clean:build', 'babel:build', 'copy:build']);
    grunt.registerTask('serve', ['build', 'connect:build', 'watch']);
};