/* File: gulpfile.js */
/* From: http://zellwk.com/blog/nunjucks-with-gulp/ */

// grab our gulp packages
var gulp  = require('gulp'),
  gutil = require('gulp-util'),
  nunjucksRender = require('gulp-nunjucks-render'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps');

// create a default task to watch files for changes
gulp.task('default', ['nunjucks', 'build-js', 'watch']);

// Enable Nunjucks to use templates and more
gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('../app/pages/**/*.+(html|nunjucks)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
      path: ['../app/templates']
    }))
    // output files in app folder
    .pipe(gulp.dest('../'))
});

// Concatenate all javascript files in the source/js folder and put it in the root level js folder
gulp.task('build-js', function() {
  return gulp.src(['../source/js/variables.js', '../source/js/functions.js','../source/js/pages/*.js',,'../source/js/components/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../js'));
});

gulp.task('watch', function() {
  gulp.watch('../app/*/**', ['nunjucks']);
  gulp.watch('../source/js/**/*.js', ['build-js']);

  return gutil.log('Gulp watch is running!')
});
