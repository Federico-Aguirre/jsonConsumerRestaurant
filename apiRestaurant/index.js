let $q = document.querySelector.bind(document),
    $qa = document.querySelectorAll.bind(document),
    comidasUrl = "./archivosJson/comidas.json";




let comidasTarget = $q('.contenedorMenu__contenedorComidas'),
    menuTarget = $q('.contenedorMenu__contenedorTexto'),
    imagenPrincipal = $q('.contenedorInicio__imagenDerecha');

fetch(comidasUrl)
    .then((response) => response.json())
    .then((comidasUrl) => {
        comidasUrl.forEach((comidasVal, key) => {
            imagenPrincipal.src = `${comidasVal.urlComida}`; //muestra la ultima imagen

            comidasTarget.innerHTML +=
                `<img src ="${comidasVal.urlComida}"class="contenedorMenu__contenedorComidas__imagenComida" />
        <div class="contenedorMenu__contenedorComidas__IDImagen">${comidasVal.id}</div>`;

            menuTarget.innerHTML +=
                `<div class="contenedorMenu__contenedorTexto__IDTexto">${comidasVal.id}. ${comidasVal.title}</div>
        <div class="contenedorMenu__contenedorTexto__precio">${comidasVal.precio}</div>`;
        })
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });



let direccionUrl = "./archivosJson/direccion.json";

fetch(direccionUrl)
    .then(function (response) {  //method without arrow function
        return response.json();
    })
    .then(function (data) {
        display_text(data[0].direccion);
        display_number(data[0].numero);
        display_days(data[0].dias);
        display_hours(data[0].horarios);

        display_text2(data[1].direccion);
        display_number2(data[1].numero);
        display_days2(data[1].dias);
        display_hours2(data[1].horarios);
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });

function display_text(text_url) {
    $q(".contenedorDirección__texto").innerHTML = text_url;
}

function display_number(number_url) {
    $q(".contenedorDirección__numero").innerHTML = number_url;
}

function display_days(days_url) {
    $q(".contenedorDirección__dias").innerHTML = days_url;
}

function display_hours(hours_url) {
    $q(".contenedorDirección__horas").innerHTML = hours_url;
}




function display_text2(text_url2) {
    $q(".contenedorDirección__texto2").innerHTML = text_url2;
}

function display_number2(number_url2) {
    $q(".contenedorDirección__numero2").innerHTML = number_url2;
}

function display_days2(days_url2) {
    $q(".contenedorDirección__dias2").innerHTML = days_url2;
}

function display_hours2(hours_url2) {
    $q(".contenedorDirección__horas2").innerHTML = hours_url2;
}