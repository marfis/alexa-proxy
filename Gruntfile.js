var readYaml = require('read-yaml');
var arnParser = require('aws-arn-parser');

module.exports = function(grunt) {

  var config = readYaml.sync('config.yml');
  var arn = config.arn;
  var parsedArn = arnParser(arn);

  grunt.initConfig({
    lambda_package: {
        default: {
            options: {
              include_files: ['node_modules', 'index.js', 'config.yml'],
            },
        },
    },
    lambda_deploy: {
        default: {
            arn: arn,
            options: {
              region: parsedArn.region,
            },
        },
    },
  });

  grunt.loadNpmTasks('grunt-aws-lambda');

  grunt.registerTask('default', ['lambda_package', 'lambda_deploy:default']);

};
