const gulp = require("gulp");
const clean = require('gulp-clean');
const paths = require('./helper/paths');

const defaults = [];
const cleanSrcs = [];
const compileTasks = [];

function logtask(task) {
  console.log("configuting: " + task.name);
  console.log("   watch: " + task.watch);
  console.log("   src:     " + paths.src(task.name));
  console.log("   release: " + paths.release(task.name));
}

module.exports = {
  configure: function (taskfn) {
    var task = taskfn(gulp);
    var src = paths.watch(task.name);
    var release = paths.release(task.name);

    gulp.task(task.name, task.fn);

    if (task.watch && src) {
      defaults.push([task.name, src]);
    }

    if (release) {
      cleanSrcs.push(release);
    }

    compileTasks.push(task.name);
  },
  initialize: function () {

    gulp.task("default", function () {
      defaults.forEach(function (watch) {
        gulp.watch(watch[1], [watch[0]]);
      });
    });

    gulp.task('clean', function () {
      return gulp.src([].concat.apply([], cleanSrcs), {read: false})
          .pipe(clean());
    });

    gulp.task('compile', compileTasks);
  }
};
