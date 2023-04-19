/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

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
