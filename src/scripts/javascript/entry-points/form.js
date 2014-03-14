var $ = require("../../../libs/jquery/jquery");
var niceScroll = require("../nice-scroll");
var menu = require("../menu");
var footerBottom = require("../footer-bottom");

$(document).ready(function () {
    niceScroll($, "html");
    menu($);
    footerBottom($);
});
