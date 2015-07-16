/**
 * This file contains build- and test related configuration entries
 * that we re-use between various build- and test tools
 * such as Gulp, Karma and Wallaby.
 *
 * Examples of these configuration entries can be:
 *  - Paths to application source files
 *  - Paths to bower dependencies that are required by our application at runtime
 *  - Paths to test-specific source files
 *  - Paths to libraries required for testing
 *  - Babel & Browserify configuration parameters
 *    etc.
 *
 * As this file will be used across multiple tools, it is currently written
 * in EcmaScript 5 for maximum compatibility. Until these tools become compatible
 * with higher EcmaScript versions, it might be migrated as well.
 *
 */

var wiredep = require('wiredep');

function getListOfBowerDependencies(devDependencies) {
  return wiredep({
    directory: 'bower_components',
    exclude: ['bootstrap-sass-official', 'lodash'],
    dependencies: !devDependencies,
    devDependencies: devDependencies
  });
}

module.exports = {
  applicationSources: [
    './src/{app, components}/**/!(*spec|*mock).js'
  ],

  applicationTemplates: [
    './src/{app,components}/**/*.html'
  ],

  applicationDependencies: getListOfBowerDependencies(false).js,

  applicationLanguageFiles: [
    './src/languages/**/*.json'
  ],

  applicationLessFiles: [
    './src/{app,components}/**/*.less'
  ],

  specSources: [
    'src/{app,components}/**/*.spec.js'
  ],

  /** all dependencies required to run specs, excluding application dependencies **/
  specDependencies: getListOfBowerDependencies(true).js.concat([
    'test/mock/moxConfig.js',
    'test/testUtils.js'
  ]),

  browserifyParams: {
    debug: true,
    transform: [ ['babelify', {optional: ['runtime']}]]
  }
};

