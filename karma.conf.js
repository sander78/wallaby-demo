'use strict';

//var buildConf = require('./build.conf');

module.exports = function(config) {

  config.set({
    autoWatch : false,

    frameworks: ['browserify', 'source-map-support', 'jasmine'],

    //browsers : ['Chrome', 'Firefox', 'PhantomJS' ],
    browsers : ['PhantomJS'],

    plugins : [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-browserify',
      'karma-source-map-support'
    ],

    //files: ([
    //  {pattern: 'src/lib/angular.js', instrument: false},
    //  {pattern: 'src/lib/angular-mocks.js', instrument: false},
    //  {pattern: 'src/app/**/*.js', load: false}
    //]),

    files: [ 'src/lib/angular.js', 'src/lib/angular-mocks.js', 'src/app/**/*.js', 'src/test/**/*.js'],

    preprocessors: {
      './src/app/**/*.js': ['browserify']
    },

    browserify: { debug: true,
      transform: [ ['babelify', {optional: ['runtime']}]] }
  });
};
