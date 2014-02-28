var $ = require("../../../libs/jquery/jquery");
var niceScroll = require("../nice-scroll");
var responsiveSlides = require("../responsive-slides");
var footerBottom = require("../footer-bottom");

$(document).ready(function () {
    niceScroll($, "html");
    responsiveSlides($, ".banner > .products > ul");
    footerBottom($);
});

