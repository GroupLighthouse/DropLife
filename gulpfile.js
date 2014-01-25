const gulp = require("./build/task-main");

gulp.configure(require("./build/task-images"));
gulp.configure(require("./build/task-libs"));
gulp.configure(require("./build/task-lint"));
gulp.configure(require("./build/task-scripts"));
gulp.configure(require("./build/task-styles"));
gulp.configure(require("./build/task-views"));

gulp.initialize();