'use strict';

var gulp = require('gulp'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  source = require('vinyl-source-stream'),
  glob = require('glob'),
  browserSync = require('browser-sync');

var paths = {
  src: 'src',
  tmp: '.tmp'
};

gulp.task('copy-index', function () {
  gulp.src('src/index.html')
      .pipe(gulp.dest(paths.tmp + '/serve'));
});

gulp.task('copy-lib', function () {
  gulp.src('src/lib/angular.js')
      .pipe(gulp.dest(paths.tmp + '/serve/lib'));
});

gulp.task('browserify', function () {
  return browserify([], {
    entries: glob.sync('src/app/*.js'),
    //basedir: paths.src,
    debug: true,
    fullPaths: true
  })
    .transform(babelify.configure({
      //sourceMapRelative: 'app/',
      optional: ['runtime'] // enable ES6-specific Array, Map and Set functions
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(paths.tmp + '/serve/app'));
});


function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = {
    '/lib': 'src/lib'
    //'/assets': "src/assets"
  };

  browserSync.instance = browserSync.init(false, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      routes: routes
    },
    ghostMode: false,
    browser: browser
  });
}

gulp.task('serve', ['browserify', 'copy-index', 'copy-lib'], function () {
  browserSyncInit([
    paths.tmp + '/serve'
  ])
});