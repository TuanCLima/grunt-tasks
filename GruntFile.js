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
        }
    })

    grunt.loadNpmTasks('grunt-contrib-concat')
}