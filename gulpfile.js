/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
  gutil = require('gulp-util'),
  nunjucksRender = require('gulp-nunjucks-render');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|nunjucks)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
      path: ['app/templates']
    }))
    // output files in app folder
    .pipe(gulp.dest('public'))
});

gulp.watch('app/*/**', ['nunjucks']);