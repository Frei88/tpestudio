/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// --validacion de formulario con jQuery--//
//$(document).ready(function() {
  //$("#basic-form").validate();});

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

// java de Wizard//
$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});


const HTMLResponse = document.querySelector("#app");
const templateUL = document.createElement(`ul`);

$.ajax({ method: "GET", url: "https://jsonplaceholder.typicode.com/comments" })

    //users: es la RESPUESTA DE LA PETICION
    .done(function (comments) {

        //Mostrar por consola la respuesta de la API
        console.log(comments)

        //Mostrar respuesta de API en un componente HTML
        //document.getElementById("app").innerHTML = users;

        //Mostrar respuesta de API en un componente HTML recorriendo cada usuario
        comments.forEach((comment) => {

            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`Nombre: ${comment.name}, Comentario: ${comment.body}, Email: ${comment.email}`)
                
            );
            templateUL.appendChild(elem);
        });
        HTMLResponse.appendChild(templateUL);

    }
    )




