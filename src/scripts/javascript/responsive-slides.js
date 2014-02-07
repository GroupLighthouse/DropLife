require("../../libs/ResponsiveSlides.js/responsiveslides");

module.exports = function ($, selector) {
  "use strict";

  $(selector).responsiveSlides({
    auto: true,
    pager: false,
    nav: false,
    timeout: 10000
  });

};

