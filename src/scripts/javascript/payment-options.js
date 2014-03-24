var accounting = require("../../libs/accounting/accounting");

module.exports = function ($) {
    "use strict";

    accounting.settings.currency.symbol = "R$ ";
    accounting.settings.currency.decimal = ",";
    accounting.settings.currency.thousand = ".";

    window.addEventListener("polymer-ready", function () {
        var pagSeguro = $("dl-button-pag-seguro")[0];
        var $options = $((document.querySelector("dl-options") || {}).impl).find("input[type=radio]");
        if ($options.length) {
            $options.on("click", function () {
                var $option = $(this);
                pagSeguro.partner = $option.data("pagSeguroPartner");
                pagSeguro.description = $option.data("pagSeguroDescription");
                pagSeguro.amount = $option.data("pagSeguroAmount");
                $(".price").text(accounting.formatMoney(pagSeguro.amount));
            });
            $options.first().trigger("click");
        } else {
            $(".price").text(accounting.formatMoney(pagSeguro.amount));
        }
    });

};
