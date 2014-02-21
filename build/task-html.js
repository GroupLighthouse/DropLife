const htmlmin = require('gulp-htmlmin');
const vulcanize = require('gulp-vulcanize');
const paths = require('./helper/paths');

const name = "html";

module.exports = function (gulp) {
  return {
    name: name,
    fn: function () {
      return gulp.src(paths.src(name))
      .pipe(gulp.dest(paths.release(name)))
      .pipe(vulcanize({dest: paths.release(name)}))
    },
    watch: true
  };
};