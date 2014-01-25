const bower = require('gulp-bower');

const srcLibs = 'src/libs/*';
const publicLibs = 'public/libs/';

module.exports = function (gulp) {
  return {
    name: "libs",
    fn: function () {
      return bower().pipe(gulp.dest(publicLibs));
    },
    watch: true,
    src: srcLibs,
    release: publicLibs
  };
};


