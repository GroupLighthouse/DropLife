const config = {
  src: {
    folder: "src/",
    images: "images/**",
    libs: "libs/*",
    lint: "scripts/javascript/**/*.js",
    scripts: "scripts/javascript/entry-points/**/*.js",
    rsplugin: "scripts/javascript/rs-plugin/**",
    styles: "styles/css/**/*.css",
    views: "views/html/**/*.html"
  },
  release: {
    folder: "release/",
    images: "images/",
    libs: "libs/",
    scripts: "scripts/javascript/entry-points/",
    rsplugin: "scripts/javascript/rs-plugin/",
    styles: "styles/css/",
    views: "views/html/"
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
  }
};
