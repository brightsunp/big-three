$(function(){

    $.fn.modal.defaults.spinner = $.fn.modalmanager.defaults.spinner = 
      '<div class="loading-spinner" style="width: 200px; margin-left: -100px;">' +
        '<div class="progress progress-striped active">' +
          '<div class="progress-bar" style="width: 100%;"></div>' +
        '</div>' +
      '</div>';

    $.fn.modalmanager.defaults.resize = true;

    $('[data-source]').each(function(){
      var $this = $(this),
        $source = $($this.data('source'));

      var text = [];
      $source.each(function(){
        var $s = $(this);
        if ($s.attr('type') == 'text/javascript'){
          text.push($s.html().replace(/(\n)*/, ''));
        } else {
          text.push($s.clone().wrap('<div>').parent().html());
        }
      });
      
      $this.text(text.join('\n\n').replace(/\t/g, '    '));
    });

    prettyPrint();
  });

var $modal = $('#ajax-modal');

$('.ajax .demo').on('click', function(){
  // create the backdrop and wait for next modal to be triggered
  $('body').modalmanager('loading');

  //add load cloud os api
  
  setTimeout(function(){
    //  $modal.load('modal_ajax_test.html', '', function(){
    //   $modal.modal();
    // });
    $modal.modal();
  }, 1000);
});

// $modal.on('click', '.update', function(){
//   $modal.modal('loading');
//   setTimeout(function(){
//     $modal
//       .modal('loading')
//       .find('.modal-body')
//         .prepend('<div class="alert alert-info fade in">' +
//           'Updated!<button type="button" class="close" data-dismiss="alert">&times;</button>' +
//         '</div>');
//   }, 1000);
// });
$modal.on('click', '.search', function(){
  $modal.modal('hide');
  //add search api & go to next step ui
  
  });
