const gulp = require("gulp");
const clean = require('gulp-clean');

const defaults = [];
const cleanSrcs = [];
const compileTasks = [];

module.exports = {
  configure: function (taskfn) {
    var task = taskfn(gulp);
    gulp.task(task.name, task.fn);

    if (task.watch) defaults.push([task.name, task.src]);

    cleanSrcs.push(task.release);
    compileTasks.push(task.name);
  },
  initialize: function () {

    gulp.task("default", function () {
      defaults.forEach(function (watch) {
        gulp.watch(watch[1], function (event) {
          gulp.run(watch[0]);
        });
      });
    });

    gulp.task('clean', function () {
      return gulp.src([].concat.apply([], cleanSrcs), {read: false})
          .pipe(clean());
    });

    gulp.task('compile', compileTasks);
  }
};
