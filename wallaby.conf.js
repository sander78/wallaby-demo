var wallabify = require('wallabify');
var wallabyPostprocessor = wallabify({
      debug: true,
      entryPatterns: 'src/app/**/*.js'
    });// , b => b.transform(require('babelify').configure({optional: ['runtime']})));
    // you may also pass an initializer function to chain other
    // browserify options, such as transformers
    // , b => b.exclude('mkdirp').transform(require('babelify'))

module.exports = function (w) {
console.log(w);

  return {
    files: ([
      {pattern: 'src/lib/angular.js', instrument: false},
      {pattern: 'src/lib/angular-mocks.js', instrument: false},
      {pattern: 'src/app/**/*.js', load: false}
    ]),

    tests: [
      'src/test/**/*.spec.js'
    ],

    preprocessors: {
      'src/app/**/*.js': file => require('babel').transform(file.content, {sourceMap: true, optional: ['runtime']})
    },

    debug: true,

    postprocessor: wallabyPostprocessor
  };
};
