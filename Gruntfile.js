module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            build: ['build/', 'tmp/']
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
                    dest: 'tmp/'
                }]
            }
        },
        browserify: {
            build: {
                files: {
                    'build/js/app.js': ['tmp/js/**/*.js']
                }
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
                files: 'build/**/*.*'
            },
            js: {
                files: 'src/js/**/*.js',
                tasks: ['babel:build', 'browserify:build']
            },
            html: {
                files: 'src/**/*.html',
                tasks: ['copy:build']
            },
            Gruntfile: {
                options: {
                    reload: true
                },
                files: 'Gruntfile.js'
            }
        }
    });

    grunt.registerTask('build', ['clean:build', 'babel:build', 'browserify:build', 'copy:build']);
    grunt.registerTask('serve', ['build', 'connect:build', 'watch']);
};