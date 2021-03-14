
 
$(function() {

  $('.lMenu').click(function() {
    $('.lMenu').toggleClass('lMenu-show');
    $('.block-l').toggleClass('block-l-show');
    $('.block-r').toggleClass('block-r-show');
  });


  $('.price_boxs').click(function() {
    $(this).next('.price_boxsC').each (function () {
      var $that = $(this);
      $(this).toggleClass ('price_boxsC_show');
    });
  });


  $('.block-l-menuBox').each (function () {
    var $that = $(this);
    $that.find ('.m-menu-t').click (function () {
      $(this).toggleClass ('s');
    });
  });

  // 光箱
  $('.showModel').click(function() {
    $('#myModel').addClass('showModel')

    $('#myModel .model_boxs.box_' + $(this).data('id')).addClass('show').siblings().removeClass('show')
  })

  $('.btn_close, .t-close').click(function() {
    $('#myModel').removeClass('showModel')
  })

  // 換頁籤
  $('.link_order_info').click(function() {
    $('.link_order_info').removeClass ('loi_s');
    $(this).addClass ('loi_s');

    $('.order_info').removeClass('order_info_show');
    $('.order_info').eq($(this).index()).addClass('order_info_show');
   });

  $('.link_order_info').eq (0).click();
});
