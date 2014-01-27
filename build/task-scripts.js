const uglify = require('gulp-uglify');
const paths = require('./helper/paths');
const browserify = require("gulp-browserify");

const name = "scripts";
const rsplugin = "rsplugin";

module.exports = function (gulp) {
  return  {
    name: name,
    fn: function () {

      return gulp.src(paths.src(name))
          .pipe(browserify({insertGlobals: true, debug: true, transform: ["debowerify"]}))
          .pipe(uglify())
          .pipe(gulp.dest(paths.release(name)))
          .pipe(gulp.src(paths.src(rsplugin)))
          .pipe(gulp.dest(paths.release(rsplugin)));
    },
    watch: true
  };
};