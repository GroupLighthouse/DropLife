require("../../libs/jquery-ui/ui/jquery-ui");

module.exports = function(jQuery){
  "use strict";

  jQuery(function () {
    jQuery("#datepicker,#datepicker2,#datepicker3,#datepicker4,#datepicker5,#datepicker6,#datepicker7,#datepicker8").datepicker();
  });
};