require("../../libs/jquery.nicescroll/jquery.nicescroll");
var mobile = require("./mobile");

module.exports = function ($, selector) {
    "use strict";

    if (!mobile.any()) {
        $(selector).niceScroll({
            zindex: "99",
            cursorcolor: "#ccc",
            cursorborder: "0px solid #fff",
            railpadding: {top: 0, right: 0, left: 0, bottom: 0},
            cursorwidth: "7px",
            cursorborderradius: "5px",
            cursoropacitymin: 0,
            cursoropacitymax: 0.7,
            boxzoom: true,
            autohidemode: false
        });
    }

};
