const htmlmin = require('gulp-htmlmin');
const paths = require('./helper/paths');

const name = "html";

module.exports = function (gulp) {
  return {
    name: "minify-html",
    fn: function () {
      return gulp.src(paths.temp(name))
      .pipe(htmlmin({ removeComments: true, collapseWhitespace: true, removeCommentsFromCDATA: true}))
      .pipe(gulp.dest(paths.release(name)));
    },
    watch: true
  };
};