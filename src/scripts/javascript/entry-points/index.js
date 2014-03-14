var $ = require("../../../libs/jquery/jquery");
var niceScroll = require("../nice-scroll");
var responsiveSlides = require("../responsive-slides");
var menu = require("../menu");
var footerBottom = require("../footer-bottom");

$(document).ready(function () {
    niceScroll($, "html");
    responsiveSlides($, ".banner > .products > ul");
    menu($);
    footerBottom($);
});
