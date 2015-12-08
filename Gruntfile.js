module.exports = function(grunt) {

    grunt.registerTask('testing', function () {

        console.log("testing:");

    });

    grunt.registerTask('123', function () {
        //fired with task is called
        console.log("1,2,3....");

    });

    grunt.registerTask('both', ['testing', '123']);



    grunt.initConfig({
        /*  these are all of the configs for the concat taskrunner.
         * 2 js files are being combined and 2 css files are being combined
         * and they are all being dumped in the build folder
         */
        concat: {
            js: {
                src: ['js/example1.js', 'js/example2.js'],
                dest: 'build/js/scripts.js'
            },
            css: {
                src: ['css/css1.css', 'css/custom_css.css'],
                dest: 'build/css/css_master.css'
            }
        },

        /* These are the configs for the uglify(minify) taskrunner
         * run concat whenever js changes
         */
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'build/js/minified_scripts.js': ['js/example1.js', 'js/example2.js']
                }
            }
        },

        /* These are the configs for the watch taskrunner
         * run concat whenever js changes
         */
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js', 'uglify:js']
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css']
            },
        },
    });




    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
}