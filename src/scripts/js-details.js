//------------------------------
//Picker
//------------------------------
jQuery(function () {
  "use strict";
  jQuery("#datepicker,#datepicker2,#datepicker3,#datepicker4,#datepicker5,#datepicker6,#datepicker7,#datepicker8").datepicker();
});

//------------------------------
//Custom select
//------------------------------
jQuery(document).ready(function () {
  "use strict";
  jQuery('.mySelectBoxClass').customSelect();

});

function mySelectUpdate() {
  "use strict";
  setTimeout(function () {
    $('.mySelectBoxClass').trigger('update');
  }, 200);
}

$(window).resize(function () {
  "use strict";
  mySelectUpdate();
});


//------------------------------
//Animations for this page
//------------------------------
$(document).ready(function () {
  "use strict";

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
});


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


//------------------------------
//Nicescroll
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

  jQuery(".hotelstab").niceScroll({horizrailenabled: false});
  jQuery(".flightstab").niceScroll({horizrailenabled: false});
  jQuery(".vacationstab").niceScroll({horizrailenabled: false});
  jQuery(".carstab").niceScroll({horizrailenabled: false});
  jQuery(".cruisestab").niceScroll({horizrailenabled: false});
  jQuery(".flighthotelcartab").niceScroll({horizrailenabled: false});
  jQuery(".flighthoteltab").niceScroll({horizrailenabled: false});
  jQuery(".flightcartab").niceScroll({horizrailenabled: false});
  jQuery(".hotelcartab").niceScroll({horizrailenabled: false});

  jQuery('html').addClass('no-overflow-y');

});

//------------------------------
//slider parallax effect
//------------------------------

jQuery(document).ready(function ($) {
  "use strict";
  var $scrollTop;
  var $headerheight;

  $(window).scroll(function () {
    $scrollTop = $(window).scrollTop();

    $('#dajy').css({'top': ((-$scrollTop / 5) + $headerheight) + 'px' });
    $(".scrolleffect").css({'top': ((-$scrollTop / 5) + $headerheight) + 50 + 'px' });
    $(".tp-leftarrow").css({'left': 20 - ($scrollTop / 2) + 'px'});
    $(".tp-rightarrow").css({'right': 20 - ($scrollTop / 2) + 'px'});
  });

});

jQuery(document).ready(function ($) {
  var product = getURLParameter('product');
  var title;
  var subtitle;
  var local;
  if (product == 'raft') {
    title = 'Raft';
    subtitle = 'Subtítulo';
    local = 'Três Coroas, RS';
  } else if (product == 'paintball') {
    title = 'Paintball';
    subtitle = 'Subtítulo';
    local = 'Porto Alegre, RS';
  } else if (product == 'standup') {
    title = 'Stand Up Paddle';
    subtitle = 'Subtítulo';
    local = 'Porto Alegre, RS';
  }
  $('#detail-title').text(title);
  $('#detail-subtitle').text(subtitle);
  $('#local').text(local);
  var index;
  for (index = 1; index <= 6; index++) {
    $('#carousel').append($('<img src="images/products/' + product + '/slide' + index + '.jpg" alt=""/>'));
    $('#pager').append($('<img src="images/products/' + product + '/slide' + index + '.jpg" width="120" height="68" alt=""/>'));
  }
});	