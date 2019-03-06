var modal = () => {
  const $overlay = $('#overlay');
  const $modal = $('#modal');
  const $close = $('#close');
  const $open = $('#open');

  function center() {
    const top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
    const left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

    $modal.css({
      top: top + $(window).scrollTop(),
      left: left + $(window).scrollTop(),
    });
  }

  function open() {
    center();
    $overlay.show();
    $modal.show();
  }

  function close() {
    $overlay.hide();
    $modal.hide();
  }

  $modal.hide();
  $overlay.hide();

  $open.click((e) => {
    e.preventDefault();
    open();
  });

  $close.click((e) => {
    e.preventDefault();
    close();
  });
};

$(document).ready(() => {
  modal();
});
