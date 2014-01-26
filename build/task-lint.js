const jshint = require('gulp-jshint');
const paths = require('./helper/paths');

const name = "lint";

module.exports = function (gulp) {
  return {
    name: name,
    fn: function () {
      var exclude = paths.exclude("rsplugin");
      console.log(exclude)
      return gulp.src([paths.src("scripts"), exclude])
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
    },
    watch: false
  };
};

