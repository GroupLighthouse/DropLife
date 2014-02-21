const main = require("./build/task-main");
const paths = require('./build/helper/paths');
const gulp = require("gulp");
const clean = require('gulp-clean');

main.configure(gulp, require("./build/task-images"));
main.configure(gulp, require("./build/task-libs"));
main.configure(gulp, require("./build/task-lint"));
main.configure(gulp, require("./build/task-javascript"));
main.configure(gulp, require("./build/task-css"));
main.configure(gulp, require("./build/task-templates"));
main.configure(gulp, require("./build/task-sass"));
main.configure(gulp, require("./build/task-fonts"));
main.configure(gulp, require("./build/task-minify-html"));

main.initialize(gulp);

gulp.task("pre-build", ["images", "libs", "javascript", "css", "templates", "sass", "fonts"]);

gulp.task("html", ["pre-build"], require("./build/task-html")(gulp).fn);

gulp.task("clean-html", ["html"], function(){
	return gulp.src([paths.release("html"), paths.release("templates")], {read: false})
          .pipe(clean());
})

gulp.task("minify-html", ["clean-html"], require("./build/task-minify-html")(gulp).fn);

gulp.task("build", ["html"]);