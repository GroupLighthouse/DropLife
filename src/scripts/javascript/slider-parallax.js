module.exports = function (jQuery) {
  "use strict";
  var jQueryscrollTop;
  var jQueryheaderheight;

  jQuery(window).scroll(function () {
    jQueryscrollTop = jQuery(window).scrollTop();

    jQuery('#dajy').css({'top': ((-jQueryscrollTop / 5) + jQueryheaderheight) + 'px' });
    jQuery(".scrolleffect").css({'top': ((-jQueryscrollTop / 5) + jQueryheaderheight) + 30 + 'px' });
    jQuery(".tp-leftarrow").css({'left': 20 - (jQueryscrollTop / 2) + 'px'});
    jQuery(".tp-rightarrow").css({'right': 20 - (jQueryscrollTop / 2) + 'px'});
    jQuery('.sliderbg').css('background', '#fff');
  });

  jQuery('img').css('opacity', '1');

};
