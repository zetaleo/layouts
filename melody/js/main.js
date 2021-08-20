$(document).ready(function () {
  // console.log("I'm ready");
  let currentFloor = 2;
  let counterUp = $('.counter-up');
  let counterDown = $('.counter-down');
  let usCurrentFloor;
  let modal = $('.modal');
  let modalCloseButton = $('.modal-close-button');

  let iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
  let event = "click";
  if (iOS) {
    event = "touchstart";
  };

  $('.flat-link').on("mouseover", function () {
    let currentFlat = 0;
    $('.flat-link').removeClass('flat-link-on')
    $('.flats path').removeClass('current-flat');
    currentFlat = $(this).attr('data-flat');
    $(`[data-flats=${currentFlat}]`).toggleClass('current-flat');

  });

  $('.flats path').on("mouseover", function () {
    let currentFlat = 0;
    $('.flats path').removeClass('current-flat');
    $('.flat-link').removeClass('flat-link-on')
    currentFlat = $(this).attr('data-flats');
    $(`[data-flat=${currentFlat}]`).toggleClass('flat-link-on');
  });

  $('.home-image path').on(event, function () {
    $('.home-image path').removeClass('current-floor');
    currentFloor = $(this).attr('data-floor');
    $(".counter").text(currentFloor);
  });

  $('.button-primary').on(event, function () {
    modal.toggleClass('is-open');
  });

  modalCloseButton.on(event, function () {
    modal.toggleClass('is-open');
  })

  counterUp.on(event, function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      $('.counter').text(usCurrentFloor);
      $('.home-image path').removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  })

  counterDown.on(event, function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      $('.counter').text(usCurrentFloor);
      $('.home-image path').removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  })
});