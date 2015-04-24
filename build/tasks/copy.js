var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');


// copies changed html files to the output directory
gulp.task('copy-jspm', function () {
  return gulp.src(paths.jspm)
    .pipe(gulp.dest(paths.output  + './jspm_packages'));
});

gulp.task('copy-config', function () {
  return gulp.src(paths.config)
    .pipe(gulp.dest(paths.output));
});

gulp.task('copy-img', function () {
  return gulp.src(paths.img)
    .pipe(gulp.dest(paths.output + './img'));
});

gulp.task('copy', function (callback) {
return runSequence(
    ['copy-jspm', 'copy-config', 'copy-img'],    
    callback
  );
});