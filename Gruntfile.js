module.exports = function(grunt){

    require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      htmlhint: {
        build: {
            options: {
                'tag-pair': true,
                'tagname-lowercase': true,
                'attr-lowercase': true,
                'attr-value-double-quotes': true,
                'doctype-first': true,
                'spec-char-escape': true,
                'id-unique': true,
                'head-script-disabled': false,
                'style-disabled': true
            },
            src: ['capp_portal/*.html']
        }
      },
      copy: {
        generate: {
          cwd: 'src',
          src: [ '**' ],
          dest: 'capp_portal',
          expand: true,
        }
      },
      clean: {
        tidyup: ['capp_portal/js', 'capp_portal/helpers']
      },
      connect: {
        www: {
          options: {
            port: 9001,
            //keepalive: true
          }
        }
      },
      casperjs: {
        files: ['tests/*_test.js', 'tests/*_test.coffee']
      }
    });

    grunt.registerTask('generate', ['copy', 'htmlhint', 'clean:tidyup']);
    grunt.registerTask('test', ['generate', 'connect', 'casperjs']);
};
