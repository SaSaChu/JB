
 
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

  // let index
  const createRow = function($rows) {
    let i = $rows.data('i')
    let j = $rows.data('j')
    $rows.data('j', j + 1)
    
    let options3 = [{text: '請選擇', val: ''}, {text: '類別01', val: ''}, {text: '類別02', val: ''}, {text: '類別03', val: ''}];

    return $('<div />').addClass('boxsFull row').append(
          $('<p />').addClass('t-r-15 text-l p-d-10').text('供應商聯絡人')).append(
          $('<div />').addClass('box19_l').append(
            $('<div />').addClass('select-style').append(
              $('<select />').attr('name', 'vendor[' + i + '][contact][' + j + ']').append(options3.map(t => $('<option />').text(t.text).val(t.val)))))).append(
          $('<div />').addClass('box19_r').append(
            $('<button />').addClass('icon-add_circle').click(addRow)))
  }
  const addRow = function() {
    let $rows = $(this).closest('.rows')
    let $row = createRow($rows)
    sortRow($rows.append($row))
  }

  const removeRow = function() {
    sortRow($(this).closest('.row').remove().closest('.rows'))
  }

  const sortRow = function($rows) {
    $rows.find('button').removeClass().addClass('icon-remove_circle').unbind().click(removeRow)
    $rows.find('.row').last().find('button').removeClass().addClass('icon-add_circle').unbind().click(addRow)
  }

  const createVendor = function(index) {
    let options1 = [{text: '請選擇', val: ''}, {text: '類別01', val: ''}, {text: '類別02', val: ''}, {text: '類別03', val: ''}];
    let options2 = [{text: '請選擇', val: ''}, {text: '類別01', val: ''}, {text: '類別02', val: ''}, {text: '類別03', val: ''}];

    let $div = $('<div />').addClass('boxsFull')
    
    let $div1 = $('<div />').addClass('boxsFull m-td-25').append(
      $('<div />').addClass('boxs30').append(
        $('<p />').addClass('t-r-15 text-l p-d-10').text('廠商類別')).append(
        $('<div />').addClass('select-style').append(
          $('<select />').attr('name', 'vendor[' + index + '][type]').append(options1.map(t => $('<option />').text(t.text).val(t.val))))))
    
    let $rows = $('<div />').addClass('box37_r').addClass('rows').data('i', index).data('j', 0)
    let $row = createRow($rows)
    
    let $div2 = $('<div />').addClass('boxsFull m-td-25 row').append(
      $('<div />').addClass('box37_l').append(
        $('<p />').addClass('t-r-15 text-l p-d-10').text('供應商')).append(
        $('<div />').addClass('select-style').append(
          $('<select />').attr('name', 'vendor[' + index + '][name]').append(options2.map(t => $('<option />').text(t.text).val(t.val)))))).append(
      $rows.append($row))

    return $div.append(
      $('<i />').addClass('splitLine_bl')).append(
      $div1).append(
      $div2)
  }

  let vendorIndex = 0
  $('#create-vendor').click(function() {
    $('#vendors').append(createVendor(vendorIndex++))
  });



  let contactIndex = 0
  const removeContact = function() {
    sortContact($(this).closest('.row').remove().closest('.rows'))
  }
  const sortContact = function($contacts) {
    $contacts.find('button').removeClass().addClass('icon-remove_circle').unbind().click(removeContact)
    $contacts.find('.row').last().find('button').removeClass().addClass('icon-add_circle').unbind().click(addContact)
  }
  const addContact = function() {
    let $contacts = $(this).closest('.rows')
    sortContact($contacts.append(createContact($contacts)))
  }
  const createContact = function($contacts) {
    return contactIndex++, $('<div />').addClass('boxsFull m-td-25 row')
      .append(
        $('<div />').addClass('box20').append(
          $('<p />').addClass('t-r-15 text-l p-d-10').text('電子郵件')).append(
          $('<div />').addClass('boxsFull p-d-15').append(
            $('<div />').addClass('box19_l').append(
              $('<label />').append(
                $('<input />').attr('name', 'contact[' + contactIndex + '][mail]').attr('type', '').attr('placeholder', '請輸入').addClass('input-f')))).append(
            $('<div />').addClass('box19_r order-c').append(
              $('<button />').addClass('icon-add_circle').click(addContact)))))
      .append(
        $('<div />').addClass('box20').append(
          $('<p />').addClass('t-r-15 text-l p-d-10').text('電子郵件備註')).append(
          $('<div />').addClass('boxsFull p-d-15').append(
            $('<div />').addClass('box19_l').append(
              $('<label />').append(
                $('<input />').attr('name', 'contact[' + contactIndex + '][memo]').attr('type', '').attr('placeholder', '請輸入').addClass('input-f'))))))
  }
  $('#contacts').append(createContact($('#contacts')))

  $('.createFile').click(function() {
    let $list = $(this).parent().prev()
    let $input = $('<input />').attr('type', 'file')
    let $name = $('<p />').addClass('t-file')
    let $div = $('<div />').addClass('boxsFull mu-file')
    let $button = $('<button />').addClass('icon-cancel del').click(_ => $div.remove())
    
    $div.append($input)
      .append($('<img />').attr('src', 'img/file_icon.svg'))
      .append($name)
      .append($button)

    $list.append($div)
    $input.click()

    $input.change(function() {
      if ($input.get(0).files.length) {
        $name.text($input.get(0).files[0].name)
        $div.addClass('show')
      } else {
        $div.removeClass('show')
      }
    })
  })

  $('.one-file').each(function() {
    let $that = $(this)
    let $input = $(this).find('input')
    let $cancel = $(this).find('.cancel')
    let $del = $(this).find('.del')
    let $cover = $(this).find('> div')
    let $name = $(this).find('.name')
    $del.click(function() {
      $that.remove()
    })
    $cancel.click(function() {
      $input.val('')
      $cover.removeClass().addClass('cover')
    })
    $input.change(function() {
      if ($input.get(0).files.length) {
        $name.text($input.get(0).files[0].name)
        $cover.removeClass().addClass('show')
      } else {
        $cover.removeClass().addClass('cover')
      }
    })
  })
});
