const bower = require('gulp-bower');
const paths = require('./helper/paths');

const name = "libs";

module.exports = function (gulp) {
  return {
    name: name,
    fn: function () {
      return bower().pipe(gulp.dest(paths.release(name)));
    },
    watch: true
  };
};


