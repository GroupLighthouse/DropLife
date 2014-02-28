module.exports = function ($) {
    "use strict";

    window.addEventListener("polymer-ready", function() {
        var $navBar = $(document.querySelector("dl-nav-bar").impl);
        $navBar.find(".menu-anchor").click(function () {
            $navBar.find(".menu").toggleClass("active");
        });
    });

};