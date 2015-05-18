module.exports = function(grunt) {
    grunt.initConfig({
        jasmine: {
            main: {
                src: 'js/app.js',
                options: {
                    specs: 'tests/feedreader.js',
                    helpers: ['node_modules/jquery/dist/jquery.min.js', 'handlebars/dist/handlebars.min.js', 'js/google_jsapi.js'],
                    summary: true
                }
            }
        }
    });

    // Register tasks.
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task.
    grunt.registerTask('default', 'jasmine');
};