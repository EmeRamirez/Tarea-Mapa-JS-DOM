//Esta función recibe el parametro respectivo a la posición dentro de la imagen y posteriormente modifica los objetos desplegados en el documento.
function mostrarCiudad(opcion) {
  $("#contenedor-carta").addClass("oculto");

  //Se añade una condicional para seleccionar el caso del contenido a mostrar, anidado dentro de un método de intervalo de tiempo para desarrollar un efecto de transición.
  setTimeout (() => {
      $("#contenedor-carta").removeClass("oculto");
      $("#imagen").attr("src", regiones[opcion][0]);
      $(".card-title").html(regiones[opcion][1]);
      $(".card-text").html(regiones[opcion][2]);
  },500);
}


//Funcion para reemplazar imagen

$('#nvaImagen').on('change',function(event){
  let foto = event.target.files[0];
  let fr = new FileReader();

  fr.onload = function(event2) {
    console.dir(event2);
    $('#imagen').attr('src',event2.target.result);
  };
  fr.readAsDataURL(foto);
});


//Funcion para modificar textos
function cambiarTextos(){
  // document.querySelector('.card-title').innerHTML = document.getElementById('input-titulo').value;
  $('.card-title').html($('#input-titulo').val());
  $('.card-text').html($('#input-texto').val());
};

  //Funcion para mostrar o esconder la carta secundaria
function alternarCard2(){
  if ($('#card-modificacion').hasClass('card-oculto') == true) { 
    $('#card-modificacion').removeClass('card-oculto');
    $('#boton-ocul').html('Ocultar');

  } else {
    $('#card-modificacion').addClass('card-oculto');
    $('#boton-ocul').html('Modificar');
  };
    
};
