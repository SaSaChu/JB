
 
$(function() {

  $('.lMenu').click(function() {
    $('.lMenu').toggleClass('lMenu-show');
    $('.block-l').toggleClass('block-l-show');
    $('.block-r').toggleClass('block-r-show');
  });

  $('.block-l-menuBox').each (function () {
    var $that = $(this);
    $that.find ('.m-menu-t').click (function () {
      $(this).toggleClass ('s');
    });
  });
});
