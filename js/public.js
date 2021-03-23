
 
$(function() {

  $('.add').click(function() {
    let box = $(this).closest('.box') // 找到盒子
    let rows = box.find('.rows') // 未來要塞入的目標

    // 建立元素
    let div = $('<div />').addClass('row')
    let input = $('<input />').attr('type', 'text').attr('placeholder', 'xxx..')
    let button = $('<button />').addClass('sub').text('-')

    // 定義刪除那顆按鈕點擊後要做的事
    button.click(function() {
      let row = $(this).closest('.row') // 點擊的刪除按鈕網上找到他所屬的 row
      row.remove() // 將它移除
    })

    // 組合元素
    div.append(input).append(button)

    // 將元素塞入目標
    rows.append(div)
  })

  // let index = 0
  //   $('.btnAdd').click(function() {
  //     let box = $(this).closest('.box') // 找到盒子
  //     let rows = box.find('.rows') // 未來要塞入的目標

  //     // 建立元素
  //     let div = $('<div />').addClass('row')
  //     let input = $('<input />').attr('type', 'text').attr('name', 'title[' + (index++) + ']').attr('placeholder', 'xxx..')
  //     let button = $('<button />').addClass('sub').text('-')

  //     // 定義刪除那顆按鈕點擊後要做的事
  //     button.click(function() {
  //       let row = $(this).closest('.row') // 點擊的刪除按鈕網上找到他所屬的 row
  //       row.remove() // 將它移除
  //     })

  //     // 組合元素
  //     div.append(input).append(button)

  //     // 將元素塞入目標
  //     rows.append(div)
  // })

  // $('.btnAdd').click(function() {
  //   let div = $('<div />').addClass('boxsFull p-d-15');
  //   let div2 = $('<div />').addClass('box19_l');
  //   let div3 = $('<div />').addClass('box19_r'); // 產生一個 div
  //   let label = $('<label />');
  //   let input = $('<input />').addClass('input-f'); // 產生一個 input
  //   let box37 = $(this).parent().parent().parent();

  //   input.attr('type', 'text');
  //   input.attr('placeholder', '請輸入');

  //   div.append(div2).append(div3); // 將 input 塞到 div 內
  //   div2.append(label);
  //   label.append(input);

  //   box37.append(div);// 把新的 div 塞到某個元素內
  // });

  // $('.btnAdd').click(function() {
  //   let div = $('<div />').addClass('boxsFull p-d-15');
  //   let div2 = $('<div />').addClass('box19_l');
  //   let div3 = $('<div />').addClass('box19_r'); // 產生一個 div
  //   let label = $('<label />');
  //   let input = $('<input />').addClass('input-f').attr('type', 'text').attr('placeholder', '請輸入'); // 產生一個 input
  //   let btn = $('<button />').addClass('icon-add_circle');

  //   label.append(input);
  //   div.append(div2).append(div3); // 將 input 塞到 div 內
  //   div2.append(label).append(input);
  //   div3.append(btn);

  //   $('.box37_r').append(div);// 把新的 div 塞到某個元素內
  // });


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

  $('.chooseBoxs').click(function() {
    $(this).next('.chooseBoxsC').each (function () {
      var $that = $(this);
      $(this).toggleClass ('chooseBoxsC_show');
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

  $('.btn_close, .t-close, .btn_delete').click(function() {
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
