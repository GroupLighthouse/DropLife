const uglify = require('gulp-uglify');
const replace = require('./helper/fix-paths');

const srcScripts = 'src/scripts/**/*.js';
const publicScripts = 'public/scripts/';
const excludeRsplugin = "!src/scripts/rs-plugin/**";

module.exports = function (gulp) {
  return  {
    name: "scripts",
    fn: function () {
      return gulp.src([srcScripts, excludeRsplugin])
          .pipe(uglify())
          .pipe(replace())
          .pipe(gulp.dest(publicScripts))
          .pipe(gulp.src(excludeRsplugin))
          .pipe(gulp.dest(publicScripts + "rs-plugin"));
    },
    watch: true,
    src: srcScripts,
    release: publicScripts
  };
};