/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// --validacion de formulario con jQuery--//
$(document).ready(function() {
  $("#basic-form").validate();});

  // validacion de nombre//

  function validar(){
	//obtengo el valor del input 
  //y elimino espacios al inicio y final del mismo
	var nombre = $.trim($("#name").val());
  //verifico si tiene un valor 
	if(nombre == '' || nombre == null){
  	$("#name").val(null);
  	alert('Ingrese el nombre.');
    return false;
  }
}//end function validar
