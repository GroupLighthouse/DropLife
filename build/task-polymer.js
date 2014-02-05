const paths = require('./helper/paths');

const name = "polymer";

module.exports = function (gulp) {
  return {
    name: name,
    fn: function () {
      return gulp.src(paths.src(name))
          .pipe(gulp.dest(paths.release(name)));
    },
    watch: true
  };
};
