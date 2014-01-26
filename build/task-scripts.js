const uglify = require('gulp-uglify');
const paths = require('./helper/paths');

const name = "scripts";

module.exports = function (gulp) {
  return  {
    name: name,
    fn: function () {
      const excludeRsplugin = paths.exclude("rsplugin");
      return gulp.src([paths.src(name), excludeRsplugin])
          .pipe(uglify())
          .pipe(gulp.dest(paths.release(name)))
          .pipe(gulp.src(excludeRsplugin))
          .pipe(gulp.dest(paths.release(name) + "rs-plugin"));
    },
    watch: true
  };
};