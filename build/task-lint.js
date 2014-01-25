const jshint = require('gulp-jshint');

const srcScripts = 'src/scripts/**/*.js';
const publicScripts = 'public/scripts/';

module.exports = function (gulp) {
  return {
    name: "lint",
    fn: function () {
      return gulp.src([srcScripts, "!src/scripts/rs-plugin/**"])
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
    },
    watch: true,
    src: srcScripts,
    release: publicScripts
  };
};

