var $ = require("../../../libs/jquery/jquery");
var niceScroll = require("../nice-scroll");
var menu = require("../menu");
var footerBottom = require("../footer-bottom");
var paymentOptions = require("../payment-options");
require("../blueimp-gallery");

$(document).ready(function () {
    niceScroll($, "html");
    menu($);
    footerBottom($);
    paymentOptions($);
});