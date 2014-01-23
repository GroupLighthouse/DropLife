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

  /* -OR- set a custom class name for the stylable element */
  //jQuery('.mySelectBoxClass').customSelect({customClass:'mySelectBoxClass'});
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
//Add rooms
//------------------------------
function addroom2() {
  "use strict";
  jQuery('.room2').addClass('block');
  jQuery('.room2').removeClass('none');
  jQuery('.addroom1').removeClass('block');
  jQuery('.addroom1').addClass('none');

}
function removeroom2() {
  "use strict";
  jQuery('.room2').addClass('none');
  jQuery('.room2').removeClass('block');

  jQuery('.addroom1').removeClass('none');
  jQuery('.addroom1').addClass('block');
}
function addroom3() {
  "use strict";
  jQuery('.room3').addClass('block');
  jQuery('.room3').removeClass('none');

  jQuery('.addroom2').removeClass('block');
  jQuery('.addroom2').addClass('none');
}
function removeroom3() {
  "use strict";
  jQuery('.room3').addClass('none');
  jQuery('.room3').removeClass('block');

  jQuery('.addroom2').removeClass('none');
  jQuery('.addroom2').addClass('block');
}


//------------------------------
//Nice Scroll
//------------------------------
jQuery(document).ready(function () {
  "use strict";
  var nice = jQuery("html").niceScroll({
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
  var jQueryloggedin = false;

  if (jQueryloggedin == false) {
    //jQueryheaderheight = jQuery('.navbar-wrapper2').height() - 20;
  } else {
    //jQueryheaderheight = jQuery('.navbar-wrapper2').height() + 100;
  }


  jQuery(window).scroll(function () {
    var jQueryiw = jQuery('body').innerWidth();
    jQueryscrollTop = jQuery(window).scrollTop();
    if (jQueryiw >= 992) {
      //jQuery('.navbar-wrapper2').css({'min-height' : 110-(jQueryscrollTop/2) +'px'});
    }
    jQuery('#dajy').css({'top': ((-jQueryscrollTop / 5) + jQueryheaderheight) + 'px' });
    //jQuery(".sboxpurple").css({'opacity' : 1-(jQueryscrollTop/300)});
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
jQuery(".one").parent()
    .mouseenter(function () {
      jQuery(this).find(".mhover").addClass("block").removeClass("none");
      jQuery(this).find(".ctitle").addClass("background-hover");
      jQuery(this).find(".icon").stop().animate(options, 100);
    })
jQuery(".one").parent()
    .mouseleave(function () {
      jQuery(this).find(".mhover").addClass("none").removeClass("block");
      jQuery(this).find(".ctitle").removeClass("background-hover");
      jQuery(this).find(".icon").stop().animate({marginLeft: "0px"}, 100);
    });


