var jQuery = require("../../../libs/jquery/jquery");
var customSelect = require("../custom-select");
var datePicker = require("../date-picker");
var niceScroll = require("../nice-scroll");
var sliderParallax = require("../slider-parallax");
var carousel = require("../initialize-carousel-detailspage");
var functions = require("../functions");
var counter = require("../counter");

jQuery(document).ready(function () {
  customSelect(jQuery);
  datePicker(jQuery);
  niceScroll(jQuery);
  sliderParallax(jQuery);
  functions(jQuery);
  counter(jQuery);

  var url = window.location.href.toString();
  var product = url.substring(url.indexOf('_') + 1, url.indexOf('.', url.indexOf('_')));
  var index;
  for (index = 1; index <= 6; index++) {
    $('#carousel').append($('<img src="../../images/products/' + product + '/slide' + index + '.jpg" alt=""/>'));
    $('#pager').append($('<img src="../../images/products/' + product + '/slide' + index + '.jpg" width="120" height="68" alt=""/>'));
  }

  carousel(jQuery);

  animatePage(jQuery);

  $('#modal').on('shown.bs.modal', function () {
    $('#input-email').focus();
  });
});

//------------------------------
//Animations for this page
//------------------------------
function animatePage($) {
  var $tip = $('.tip-arrow');
  $tip.css({'bottom': 1 + 'px'});
  $tip.animate({'bottom': -9 + 'px'}, { duration: 700, queue: false });

  var $bookfilters = $('.bookfilters');
  $bookfilters.css({'margin-top': -40 + 'px'});
  $bookfilters.animate({'margin-top': 0 + 'px'}, { duration: 1000, queue: false });

  var $topsortby = $('.topsortby');
  $topsortby.css({'opacity': 0});
  $topsortby.animate({'opacity': 1}, { duration: 1000, queue: false });

  var $itemscontainer = $('.itemscontainer');
  $itemscontainer.css({'opacity': 0});
  $itemscontainer.animate({'opacity': 1}, { duration: 1000, queue: false });
}


//------------------------------
//Counter
//------------------------------
jQuery(function ($) {
  "use strict";
  $('.countprice').countTo({
    from: 5,
    to: 36,
    speed: 1000,
    refreshInterval: 50,
    onComplete: function (value) {
      console.debug(this);
    }
  });
  $('.counthotel').countTo({
    from: 1,
    to: 53,
    speed: 2000,
    refreshInterval: 50,
    onComplete: function (value) {
      console.debug(this);
    }
  });
});