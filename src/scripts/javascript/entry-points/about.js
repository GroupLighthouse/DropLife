var $ = require("../../../libs/jquery/jquery");
var niceScroll = require("../nice-scroll");
var footerBottom = require("../footer-bottom");

$(document).ready(function () {
    niceScroll($, "html");
    footerBottom($);
});