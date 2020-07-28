$(document).ready(function () {
    $('#menu-icon').click(function () {
        $('.fix-header').toggleClass('menu');
    });
    $('#sub-selector').click(function () {
      $('.fix-header').toggleClass('sub');
  });
    var tabVal = $('.fix-tab .nav-tabs>li.active a h3').html();
    $(".tab-value").html(tabVal);
    $('.fix-tab .nav-tabs>li').click(function () {
      tabVal = $(this).find('h3').html();
      $(".tab-value").html(tabVal);
  });
  $('.tablezoom').click(function () {
   $(this).parents(".table-responsive").toggleClass('fixed');
  });   

  $(document).on('click', function (event) {
    $("body").removeClass('menu').removeClass('sub');
  });
  $('#menu-icon, #sub-selector').on('click', function (event) {
    event.stopPropagation();
  });

  //$('#ControllerTable').DataTable();
 
});

