module.exports = function(grunt) {
    //CREATING CUSTOM TASKS IN GRUNT

    //create a new task called testing
    grunt.registerTask('testing', function () {
        //when grunt testing is run, console log "Running the testing task
        console.log("Running the testing task.");

    });

    //create a new task called count
    grunt.registerTask('count', function () {
        //when grunt count is run, console log "1,2,3...."
        console.log("1,2,3....");

    });

    //when grunt test-count is run, run testing and count tasks
    grunt.registerTask('test-count', ['testing', 'count']);


    //USING COMMON GRUNT PLUGINS
    //concat
    grunt.loadNpmTasks('grunt-contrib-concat');
    //watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    //uglify
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //configuration for grunt plugins
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
                //if any of these files change
                files: ['js/**/*.js'],
                //run these tasks
                tasks: ['concat:js', 'uglify:js']
            },
            css: {
                //if any of these files change
                files: ['css/**/*.css'],
                //run these tasks
                tasks: ['concat:css']
            }
        }
    });

    grunt.registerTask('watch-js', ['watch:js']);




}