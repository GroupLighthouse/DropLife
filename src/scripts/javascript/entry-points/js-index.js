var jQuery = require("../../../libs/jquery/jquery");
var niceScroll = require("../nice-scroll");
var sliderParallax = require("../slider-parallax");
var revolution = require("../revolution");
var functions = require("../functions");

jQuery(document).ready(function () {
  functions(jQuery);
  niceScroll(jQuery);
  sliderParallax(jQuery);
  revolution(jQuery);

  var one = jQuery(".one");

  function addHoverEffect() {
    jQuery(this).find(".mhover").addClass("block").removeClass("none");
    jQuery(this).find(".ctitle").addClass("background-hover");
    jQuery(this).find(".icon").stop().animate({marginLeft: one.width() / 2 - 15}, 100);
  }

  function removeHoverEffect() {
    jQuery(this).find(".mhover").addClass("none").removeClass("block");
    jQuery(this).find(".ctitle").removeClass("background-hover");
    jQuery(this).find(".icon").stop().animate({marginLeft: "0px"}, 100);
  }

  one.parent().mouseenter(addHoverEffect);

  one.parent().mouseleave(removeHoverEffect);
});