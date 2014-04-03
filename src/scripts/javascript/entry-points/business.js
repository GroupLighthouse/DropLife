var $ = require("../../../libs/jquery/jquery");
var niceScroll = require("../nice-scroll");
var menu = require("../menu");
var footerBottom = require("../footer-bottom");

$(document).ready(function () {
    niceScroll($, "html");
    menu($);
    footerBottom($);
    $("#form-button").click(euQuero);
});

function euQuero() {
  sendEmail(subject(), message());
}

function subject() {
 return 'Para Empresas - Registro de interesse';
}

function message() {
 return $('#nome').val() + ';' + $('#telefone').val() + ';' + $('#email').val() + ';' + $('#empresa').val() + ';' + $('#conheceu').val();
}

function sendEmail(subject, message) {
  $.get('email.php?subject=' + subject + '&message=' + message, {}, callbackSendEmail, 'text');
}

function callbackSendEmail() {
  $('#nome').val('');
  $('#telefone').val('');
  $('#email').val('');
  $('#empresa').val('');
  $('#conheceu').val("default");
  $('#mensagem').val('');
  $('#alert').show();
}
