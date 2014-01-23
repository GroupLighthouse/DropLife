var gulp = require('gulp');
var bower = require('gulp-bower');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var replace = require('gulp-replace');
var jshint = require('gulp-jshint');

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

  gulp.watch(srcViews, function (event) {
    gulp.run('views');
  });

});

gulp.task('scripts', function () {
  return gulp.src([srcScripts, "!src/scripts/rs-plugin/**"])
      .pipe(uglify())
      .pipe(replace(/images\//g, "public/images/"))
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
      .pipe(htmlmin({ removeComments: true, collapseWhitespace: true, removeCommentsFromCDATA: true}))
      .pipe(replace(/styles\//g, "public/styles/"))
      .pipe(replace(/scripts\//g, "public/scripts/"))
      .pipe(replace(/images\//g, "public/images/"))
      .pipe(replace(/libs\//g, "public/libs/"))
      .pipe(gulp.dest(publicViews));
});

gulp.task('lint', function() {
  return gulp.src([srcScripts, "!src/scripts/rs-plugin/**"])
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('package', ["compile"], function () {
  return gulp.src("public/**")
      .pipe(gulp.dest("release/public"))
      .pipe(gulp.src(publicViews + "/*.html"))
      .pipe(gulp.dest("release/"));
});

gulp.task('compile', ["lint", "libs", "styles", "rs-plugin", "scripts", "images", "views"]);