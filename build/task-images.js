const imagemin = require('gulp-imagemin');
const paths = require('./helper/paths');

const name = "images";

module.exports = function (gulp) {
  return {
    name: name,
    fn: function () {
      return gulp.src(paths.src(name))
          .pipe(imagemin())
          .pipe(gulp.dest(paths.release(name)));
    },
    watch: true
  };
};