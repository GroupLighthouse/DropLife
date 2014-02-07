var $ = require("../../../libs/jquery/jquery");
var niceScroll = require("../nice-scroll");
require("../responsiveslides");

$(document).ready(function () {
    niceScroll($, "html");
    $(".banner > .products > ul").responsiveSlides({
        auto: true,
        pager: false,
        nav: false,
        timeout: 10000
    });
});