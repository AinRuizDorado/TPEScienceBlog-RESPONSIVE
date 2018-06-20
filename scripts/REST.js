"use strict";
const GetApi = "http://web-unicen.herokuapp.com/api/groups/25-Hsieh-Ruiz/Users";
let OnUsers = document.querySelector(".users");
let OnRender = document.querySelector(".render");

function GetJson() {
    fetch(urlApi)
        .then(r => r.json())
        .then(json => mostrar(OnRender, json))
        .catch(error => alert("error por favor vuelva a refrescar la pagina"));
}