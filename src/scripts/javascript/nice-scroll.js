require("../../libs/jquery.nicescroll/jquery.nicescroll.min.js");

module.exports = function () {
  "use strict";

  jQuery("html").niceScroll({
    cursorcolor: "#ccc",
    cursorborder: "0px solid #fff",
    railpadding: {top: 0, right: 0, left: 0, bottom: 0},
    cursorwidth: "5px",
    cursorborderradius: "0px",
    cursoropacitymin: 0,
    cursoropacitymax: 0.7,
    boxzoom: true,
    autohidemode: false
  });

  jQuery('html').addClass('no-overflow-y');

};
