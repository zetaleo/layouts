$(document).ready(function () {
  // console.log("I'm ready");
  let currentFloor = 2;
  let counterUp = $('.counter-up');
  let counterDown = $('.counter-down');
  let usCurrentFloor;
  let iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
  let event = "click";
  if (iOS){
    event = "touchstart";
  };

  $('.home-image path').on(event, function () {
    $('.home-image path').removeClass('current-floor');
    currentFloor = $(this).attr('data-floor');
    $(".counter").text(currentFloor);
  });

  counterUp.on("click", function () {
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
  counterDown.on("click", function () {
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