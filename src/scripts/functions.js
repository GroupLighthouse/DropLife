jQuery(document).ready(function () {
  "use strict";

  jQuery("#back-top").hide();

  // fade in #back-top
  jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 700) {
        jQuery('#back-top').fadeIn();
      } else {
        jQuery('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    jQuery('#back-top').find('a').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    // scroll body to 0px on click
    jQuery('a#gotop2').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    var body = jQuery('body').innerHeight();
    jQuery(".scroll").click(function (event) {
      event.preventDefault();
      jQuery('html,body').animate({scrollTop: jQuery(this.hash).offset().top - body}, 1500);
    });


  });
});

function getURLParameter(name) {
  return decodeURI(
      (new RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
  );
}

function euQuero() {
  sendEmail('Eu Quero', 'E-mail: ' + jQuery('#input-email').val());
}

function sendEmail(subject, message) {
  jQuery.get('email.php?subject=' + subject + '&message=' + message, {}
  , function() {
      jQuery('#input-email').val('');
      jQuery('#modal').modal('hide')
  }, 'text');
}