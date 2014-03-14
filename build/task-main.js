const clean = require('gulp-clean');
const gulp = require('gulp');
const paths = require('./helper/paths');
const sitemap = require('gulp-sitemap');

const defaults = [];
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

    if(task.dependencies){
      gulp.task(task.name, task.dependencies, task.fn);
    } else {
      gulp.task(task.name, task.fn);
    }

    if (task.watch && src) {
      compileTasks.push(task.name);
      if(task.parent){
        defaults.push([src, task.parent]);
      } else {
        defaults.push([src, task.name]);
      }
    }

  },
  initialize: function () {

    gulp.task("default", function () {
      defaults.forEach(function (watch) {
        gulp.watch(watch[0], [watch[1]]);
      });
    });

    gulp.task('sitemap', compileTasks, function () {
        gulp.src('release/views/html/*.html', {
            read: false
        }).pipe(sitemap({
          siteUrl: 'http://www.droplife.com.br/views/html'
        }))
        .pipe(gulp.dest('release/'));
    });

    gulp.task('clean', function () {
      return gulp.src("release/", {read: false})
          .pipe(clean());
    });

    gulp.task('compile', ["sitemap"]);

  }
};
