module.exports = function ($) {
    "use strict";

    window.addEventListener("polymer-ready", function() {
        var $options = $((document.querySelector("dl-options") || {}).impl).find("input[type=radio]");
        $options.on("click", function () {
            var $option = $(this);
            $("dl-button-pag-seguro")[0].code = $option.data("value");
            $(".price").text($option.data("additionalDescription"));
        });
        $options.first().trigger("click");
    });

};