'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browswerSync = require('browser-sync').create();

gulp.task('workflow', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(browswerSync.reload({
      stream: true
  }))
  
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('browserSync', function () {
  browswerSync.init({
    server: {
      baseDir: 'src'
    }
  })
})

gulp.task('default', ['browserSync', 'workflow'], function () {
  gulp.watch('./src/sass/**/*.scss', ['workflow']);
  gulp.watch('.src/*.html', browserSync.reload);
});