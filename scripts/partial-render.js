"use strict";
let sites = ["pero madre mia willy","html\log.html",];

$('#use-ajax').hide();

function loadClick(event) {
    $('#use-ajax').show();
    event.preventDefault();
    fetch("html/log.html").then(function (response) {
        console.log("ok");
        console.log(response);
        response.text().then(t => document.querySelector("#use-ajax").innerHTML = t);
    });
}

let jsloads = document.querySelectorAll(".js-load");
jsloads.forEach(e => e.addEventListener("click", loadClick));