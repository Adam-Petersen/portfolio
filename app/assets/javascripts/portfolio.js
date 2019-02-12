var modal = function() {
  var init = function() {

  };

  $overlay = $('#overlay');
  $modal = $('#modal');
  $close = $('#close');
  $open = $('#open');

  $modal.hide();
  $overlay.hide();
  $open.click(function(e) {
    e.preventDefault();
    open();
  });
  $close.click(function(e) {
    e.preventDefault();
    close();
  })

  function center() {
    var top, left;

    top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
    left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

    $modal.css({
      top: top + $(window).scrollTop(),
      left: left + $(window).scrollTop()
    });
  };

  function open() {
    center();
    $overlay.show();
    $modal.show();
  };

  function close() {
    $overlay.hide();
    $modal.hide();
  }


};

$(document).ready(function() {
  modal();
})
