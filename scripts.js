$(function () {
    $('[data-toggle="tooltip"]').tooltip('show');
  })

  $('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })



 