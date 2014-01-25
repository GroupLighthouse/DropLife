const replace = require('gulp-replace');
var es = require('event-stream');

module.exports = function () {
  return es.pipeline(
      replace(/libs\//g, "public/libs/"),
      replace(/scripts\//g, "public/scripts/"),
      replace(/images\//g, "public/images/"),
      replace(/styles\//g, "public/styles/")
  );
}
