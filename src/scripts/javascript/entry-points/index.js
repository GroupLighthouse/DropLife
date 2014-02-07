var $ = require("../../../libs/jquery/jquery");
var niceScroll = require("../nice-scroll");
var responsiveSlides = require("../responsive-slides");


$(document).ready(function () {
    niceScroll($, "html");
    responsiveSlides($, ".banner > .products > ul");
});