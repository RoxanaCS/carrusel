//cargando la página
$(document).ready(function(){
  var imgItems= $('.slider li').length;
  var imgPos = 1;
  //console.log(imgPos);

  //ocultar imagenes salvo la primera
  $('.slider li').hide();
  $('.slider li:first').show();
  $('.pagination li:first').css({'color':'#059482'});

  //Ejecución de funciones que se desciben más abajo
  $('.pagination li').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);

//función para que cambie automático el slider
  setInterval(function(){
    nextSlider();
  }, 4000);

  //creando funciones
  //funcion para que cambien las fotos segun el circulo
  function pagination(){
    var paginationPosition = $(this).index() + 1;
    //console.log(paginationPosition);
    $('.slider li').hide();
    $('.slider li:nth-child('+ paginationPosition +')').fadeIn();
    //cambie color el circulo depende de la foto
    $('.pagination li').css({'color':'#858585'});
    $(this).css({'color':'#059482'});
    imgPos = paginationPosition;
  }

  //funcion para que las flechas cambien la imagen
  function nextSlider(){
    if(imgPos>= imgItems){
      imgPos = 1;
    } else{
      imgPos++;
    }
    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color':'#059482'});
    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }

  function prevSlider(){
    if(imgPos<= 1){
      imgPos = imgItems;
    } else{
      imgPos--;
    }
    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color':'#059482'});
    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }
});
