const gulp = require("./build/task-main");

gulp.configure(require("./build/task-images"));
gulp.configure(require("./build/task-libs"));
gulp.configure(require("./build/task-lint"));
gulp.configure(require("./build/task-javascript"));
gulp.configure(require("./build/task-css"));
gulp.configure(require("./build/task-html"));
gulp.configure(require("./build/task-sass"));
gulp.configure(require("./build/task-fonts"));
gulp.configure(require("./build/task-new-views"));

gulp.initialize();