module.exports = function(grunt) {

    grunt.initConfig({})

    grunt.registerTask('run', () => {
        console.log('running run task')
    })

    grunt.registerTask('sleep', () => {
        console.log('running sleep task')
    })

    grunt.registerTask('all', ['run', 'sleep'])
}