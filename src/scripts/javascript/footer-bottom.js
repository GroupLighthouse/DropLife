module.exports = function ($) {
    "use strict";

    $(window).on("footer-to-bottom", function () {
        var $navBar = $((document.querySelector("dl-nav-bar") || {}).impl);
        var $sectionBar = $((document.querySelector("dl-section-bar") || {}).impl);
        var $footer = $((document.querySelector("dl-footer") || {}).impl);

        var height = $navBar.find(".nav-bar-header").outerHeight();
        height += $sectionBar.find(".dl-section-bar-header").outerHeight();
        height += $footer.find(".payment").outerHeight();
        height += $footer.find(".footer").outerHeight();

        $(".main").css("min-height", ($(this).height() - height) + "px");
    });

    $(window).on("resize", function () {
        $(this).trigger("footer-to-bottom");
    });

};
