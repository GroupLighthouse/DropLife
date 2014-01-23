//------------------------------
//Picker
//------------------------------

jQuery(function () {
  "use strict";
  jQuery("#datepicker,#datepicker2,#datepicker3,#datepicker4,#datepicker5,#datepicker6,#datepicker7,#datepicker8").datepicker();
});


//------------------------------
//Custom Select
//------------------------------
jQuery(document).ready(function () {
  "use strict";
  jQuery('.mySelectBoxClass').customSelect();
});

function mySelectUpdate() {
  "use strict";
  setTimeout(function () {
    jQuery('.mySelectBoxClass').trigger('update');
  }, 200);
}

jQuery(window).resize(function () {
  mySelectUpdate();
});

//------------------------------
//Nice Scroll
//------------------------------
jQuery(document).ready(function () {
  "use strict";
  jQuery("html").niceScroll({
    cursorcolor: "#ccc",
    cursorborder: "0px solid #fff",
    railpadding: {top: 0, right: 0, left: 0, bottom: 0},
    cursorwidth: "5px",
    cursorborderradius: "0px",
    cursoropacitymin: 0,
    cursoropacitymax: 0.7,
    boxzoom: true,
    autohidemode: false
  });

  jQuery("#air").niceScroll({horizrailenabled: false});
  jQuery("#hotel").niceScroll({horizrailenabled: false});
  jQuery("#car").niceScroll({horizrailenabled: false});
  jQuery("#vacations").niceScroll({horizrailenabled: false});

  jQuery('html').addClass('no-overflow-y');

});


//------------------------------
//Slider parallax effect
//------------------------------

jQuery(document).ready(function (jQuery) {
  "use strict";
  var jQueryscrollTop;
  var jQueryheaderheight;

  jQuery(window).scroll(function () {
    jQueryscrollTop = jQuery(window).scrollTop();

    jQuery('#dajy').css({'top': ((-jQueryscrollTop / 5) + jQueryheaderheight) + 'px' });
    jQuery(".scrolleffect").css({'top': ((-jQueryscrollTop / 5) + jQueryheaderheight) + 30 + 'px' });
    jQuery(".tp-leftarrow").css({'left': 20 - (jQueryscrollTop / 2) + 'px'});
    jQuery(".tp-rightarrow").css({'right': 20 - (jQueryscrollTop / 2) + 'px'});
  });

});

//------------------------------
//ROLLOVER
//------------------------------

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
