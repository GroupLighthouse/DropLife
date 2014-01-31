const htmlmin = require('gulp-htmlmin');
const paths = require('./helper/paths');

const name = "newviews";

module.exports = function (gulp) {
  return {
    name: name,
    fn: function () {
      return gulp.src(paths.src(name))
          .pipe(htmlmin({ removeComments: true, collapseWhitespace: true, removeCommentsFromCDATA: true}))
          .pipe(gulp.dest(paths.release(name)));
    },
    watch: true
  };
};