const minifyCSS = require('gulp-minify-css');

const srcStyles = 'src/styles/*.css';
const publicStyles = 'public/styles/';

module.exports = function (gulp) {
  return {
    name: "styles",
    fn: function () {
      return gulp.src(srcStyles)
          .pipe(minifyCSS())
          .pipe(gulp.dest(publicStyles));
    },
    watch: true,
    src: srcStyles,
    release: publicStyles
  };
}