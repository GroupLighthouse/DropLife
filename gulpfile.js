var gulp = require('gulp');
var bower = require('gulp-bower');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var replace = require('gulp-replace');

const srcLibs = 'src/libs/*';
const srcStyles = 'src/styles/*.css';
const srcImages = 'src/images/**';
const srcScripts = 'src/scripts/**/*.js';
const srcViews = 'src/*.html';

const publicLibs = 'public/libs/';
const publicStyles = 'public/styles/';
const publicImages = 'public/images/';
const publicScripts = 'public/scripts/';
const publicViews = '.';

gulp.task('default', function () {

  gulp.watch(srcStyles, function (event) {
    gulp.run('styles');
  });

  gulp.watch(srcLibs, function (event) {
    gulp.run('libs');
  });

  gulp.watch(srcImages, function (event) {
    gulp.run('images');
  });

  gulp.watch(srcScripts, function (event) {
    gulp.run('scripts');
  });

});

gulp.task('scripts', function () {
  return gulp.src([srcScripts, "!src/scripts/rs-plugin/**"])
      .pipe(uglify())
      .pipe(gulp.dest(publicScripts));
});

gulp.task('rs-plugin', function () {
  return gulp.src("!src/scripts/rs-plugin/**")
      .pipe(gulp.dest(publicScripts + "rs-plugin"));
});

gulp.task('libs', function () {
  return bower().pipe(gulp.dest(publicLibs));
});

gulp.task('styles', function () {
  return gulp.src(srcStyles)
      .pipe(minifyCSS())
      .pipe(gulp.dest(publicStyles));
});

gulp.task('images', function () {
  return gulp.src(srcImages)
      .pipe(imagemin())
      .pipe(gulp.dest(publicImages));
});

gulp.task('views', function () {
  return gulp.src(srcViews)
      .pipe(htmlmin())
      .pipe(replace(/styles\//g, "public/styles/"))
      .pipe(replace(/scripts\//g, "public/scripts/"))
      .pipe(replace(/images\//g, "public/images/"))
      .pipe(replace(/libs\//g, "public/libs/"))
      .pipe(gulp.dest(publicViews));
});

gulp.task('compile', function () {
  gulp.run("libs");
  gulp.run("styles");
  gulp.run("rs-plugin");
  gulp.run("scripts");
  gulp.run("images");
  gulp.run("views");
});