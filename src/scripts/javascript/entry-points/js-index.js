var jQuery = require("../../../libs/jquery/jquery");
var customSelect = require("../custom-select");
var datePicker = require("../date-picker");
var niceScroll = require("../nice-scroll");
var sliderParallax = require("../slider-parallax");
var revolution = require("../revolution");
var functions = require("../functions");

jQuery(document).ready(function () {
  functions(jQuery);
  customSelect(jQuery);
  datePicker(jQuery);
  niceScroll(jQuery);
  sliderParallax(jQuery);
  revolution(jQuery);
});

var theSide = 'marginLeft';
var options = {};
options[theSide] = jQuery('.one').width() / 2 - 15;

var one = jQuery(".one");
one.parent()
    .mouseenter(function () {
      jQuery(this).find(".mhover").addClass("block").removeClass("none");
      jQuery(this).find(".ctitle").addClass("background-hover");
      jQuery(this).find(".icon").stop().animate(options, 100);
    });
one.parent()
    .mouseleave(function () {
      jQuery(this).find(".mhover").addClass("none").removeClass("block");
      jQuery(this).find(".ctitle").removeClass("background-hover");
      jQuery(this).find(".icon").stop().animate({marginLeft: "0px"}, 100);
    });