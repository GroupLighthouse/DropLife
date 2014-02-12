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
    fonts: "styles/fonts/**/*.*",
    html: "views/html/**/*.html",
    templates: "views/templates/**/*.html"
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
    fonts: "styles/fonts/**/*.*",
    html: "views/html/**/*.html",
    templates: "views/templates/**/*.html"
  },
  release: {
    folder: "release/",
    images: "images/",
    libs: "libs/",
    javascript: "scripts/javascript/entry-points/",
    rsplugin: "scripts/javascript/rs-plugin/",
    css: "styles/css/",
    sass: "styles/scss/entry-points/",
    fonts: "styles/fonts/",
    html: "views/html/",
    templates: "views/templates/"
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
