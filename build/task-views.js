const htmlmin = require('gulp-htmlmin');
const replace = require('./helper/fix-paths');

const srcViews = ['src/*.html', 'src/*.php'];
const publicViews = '.';

module.exports = function (gulp) {
  return {
    name: "views",
    fn: function () {
      return gulp.src(srcViews)
          .pipe(htmlmin({ removeComments: true, collapseWhitespace: true, removeCommentsFromCDATA: true}))
          .pipe(replace())
          .pipe(gulp.dest(publicViews));
    },
    watch: true,
    src: srcViews,
    release: ['*.html', '*.php']
  };
};