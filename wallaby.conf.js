var wallabify = require('wallabify');
var wallabyPostprocessor = wallabify({
      debug: true
    });// , b => b.transform(require('babelify').configure({optional: ['runtime']})));
    // you may also pass an initializer function to chain other
    // browserify options, such as transformers
    // , b => b.exclude('mkdirp').transform(require('babelify'))

module.exports = function () {
  return {
    files: ([
      'src/lib/angular.js',
      'src/lib/angular-mocks.js',
      {pattern: 'src/app/**/*.js', load: false}
    ]),

    tests: [
      {pattern: 'src/test/**/*.spec.js', load: false}
    ],

    preprocessors: {
      'src/app/**/*.js': file => require('babel').transform(file.content, {sourceMap: true, optional: ['runtime']})
    },

    debug: true,

    postprocessor: wallabyPostprocessor,

    bootstrap: function () {
      // required to trigger tests loading
      window.__moduleBundler.loadTests();
    }
  };
};