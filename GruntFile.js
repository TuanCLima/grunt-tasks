const sass = require('node-sass');

module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/script.js'
            },
            css: {
                src: ['css/*.css'],
                dest: 'build/style.css'
            }
        },
        sass: {
            options: {
                implementation: sass,
            },
            dist: {
                files: {
                    'css/styles.css': 'css/scss/styles.scss'
                }
            },
        },
        uglify: {
            js: {
                files: {
                    'build/script.js': ['build/script.js']
                }
            },
        }
    })

    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('all', ['sass', 'concat:js', 'concat:css', 'uglify:js'])
}