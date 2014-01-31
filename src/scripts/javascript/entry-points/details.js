var jQuery = require("../../../libs/jquery/jquery");
var niceScroll = require("../nice-scroll");
var sliderParallax = require("../slider-parallax");
var carousel = require("../carousel");
var functions = require("../functions");

jQuery(document).ready(function () {
  niceScroll(jQuery);
  sliderParallax(jQuery);
  functions(jQuery);
  carousel(jQuery);
});