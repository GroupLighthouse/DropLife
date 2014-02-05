const config = {
  watch: {
    folder: "src/",
    images: "images/**",
    libs: "libs/*",
    lint: "scripts/javascript/**/*.js",
    javascript: "scripts/javascript/**/*.js",
    rsplugin: "scripts/javascript/rs-plugin/**",
    css: "styles/css/**/*.css",
    sass: "styles/scss/**/*.scss",
    html: "views/html/**/*.html",
    polymer: "views/polymer/**/*.html",
    newviews: "views/new/**/*.html"
  },
  src: {
    folder: "src/",
    images: "images/**",
    libs: "libs/*",
    lint: "scripts/javascript/**/*.js",
    javascript: "scripts/javascript/entry-points/**/*.js",
    rsplugin: "scripts/javascript/rs-plugin/**",
    css: "styles/css/**/*.css",
    sass: "styles/scss/entry-points/**/*.scss",
    html: "views/html/**/*.html",
    polymer: "views/polymer/**/*.html",
    newviews: "views/new/**/*.html"
  },
  release: {
    folder: "release/",
    images: "images/",
    libs: "libs/",
    javascript: "scripts/javascript/entry-points/",
    rsplugin: "scripts/javascript/rs-plugin/",
    css: "styles/css/",
    sass: "styles/scss/entry-points/",
    html: "views/html/",
    polymer: "views/polymer/",
    newviews: "views/new/"
  }
};

function get(where, type) {
  return config[where].folder + config[where][type];
}

module.exports = {
  exclude: function (type) {
    return "!" + get("src", type);
  },
  src: function (type) {
    return  get("src", type);
  },
  release: function (type) {
    return get("release", type);
  },
  watch: function (type) {
    return get("watch", type);
  }
};
