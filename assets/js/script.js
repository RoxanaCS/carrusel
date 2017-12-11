$(document).ready(function(){
  $('h1').wrap('<div></div>');

  $('#btn').click(function(){
    var comentario = $('#comment').val();
    $('#comment').val("")
  })
})
