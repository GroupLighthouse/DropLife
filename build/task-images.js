const imagemin = require('gulp-imagemin');

const srcImages = 'src/images/**';
const publicImages = 'public/images/';

module.exports = function (gulp) {
  return {
    name: "images",
    fn: function () {
      return gulp.src(srcImages)
          .pipe(imagemin())
          .pipe(gulp.dest(publicImages));
    },
    watch: true,
    src: srcImages,
    release: publicImages
  };
};