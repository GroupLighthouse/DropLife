const main = require("./build/task-main");
const gulp = require("gulp");

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

gulp.task("html", ["pre-build"], require("./build/task-html").fn);

gulp.task("build", ["html"], function() {
	gulp.run("minify-html");
});