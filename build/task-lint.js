const jshint = require('gulp-jshint');
const paths = require('./helper/paths');

const name = "lint";

module.exports = function (gulp) {
  return {
    name: name,
    fn: function () {
      return gulp.src([paths.src(name), paths.exclude("rsplugin")])
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
    },
    watch: false
  };
};

