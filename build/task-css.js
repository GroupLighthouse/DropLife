const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');
const paths = require('./helper/paths');

const name = "css";

module.exports = function (gulp) {
  return {
    name: name,
    fn: function () {
      return gulp.src(paths.src(name))
          .pipe(minifyCSS())
          .pipe(concat("styles.css"))
          .pipe(gulp.dest(paths.release(name)));
    },
    watch: true
  };
};