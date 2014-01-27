require("../../libs/jquery.customSelect/jquery.customSelect");

function mySelectUpdate(jQuery) {
  "use strict";
  setTimeout(function () {
    jQuery('.mySelectBoxClass').trigger('update');
  }, 200);
}

module.exports = function (jQuery) {
  "use strict";
  jQuery('.mySelectBoxClass').customSelect();

  jQuery(window).resize(function () {
    mySelectUpdate(jQuery);
  });
};


