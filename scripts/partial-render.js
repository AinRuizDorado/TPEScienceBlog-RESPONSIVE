"use strict";
let firstOpen = true;
let jshome = document.querySelectorAll(".js-home");
let jscategories = document.querySelectorAll(".js-categories");
let jsusers = document.querySelectorAll(".js-users");
let jslog = document.querySelectorAll(".js-log");


jshome.forEach(e => e.addEventListener("click", loadHome));
jsusers.forEach(e => e.addEventListener("click", loadUsers));
jscategories.forEach(e => e.addEventListener("click", loadCategories));
jslog.forEach(e => e.addEventListener("click", loadLog));

function loadHome(event) {
    event.preventDefault();
    fetch("html/home.html").then(function (response) {
        console.log("ok");
        console.log(response);
        response.text().then(t => document.querySelector("#render").innerHTML = t);
    });
}
function loadHomeFirstTime() {
    // setTimeout(() => {
        fetch("html/home.html").then(function (response) {
            console.log("ok");
            console.log(response);
            response.text().then(t => document.querySelector("#render").innerHTML = t);
        });
    // }, 3000);
    // event.preventDefault();

    firstOpen = false;
}
if (firstOpen == true) {
    loadHomeFirstTime();
}
function loadUsers(event) {
    event.preventDefault();
    fetch("html/falta.html").then(function (response) {
        console.log("ok");
        console.log(response);
        response.text().then(t => document.querySelector("#render").innerHTML = t);
    });
}

function loadCategories(event) {
    event.preventDefault();
    fetch("html/categories.html").then(function (response) {
        console.log("ok");
        console.log(response);
        response.text().then(t => document.querySelector("#render").innerHTML = t);
    });
}


function loadLog(event) {
    event.preventDefault();
    fetch("html/log.html").then(function (response) {
        console.log("ok");
        console.log(response);
        response.text().then(t => document.querySelector("#render").innerHTML = t);
    });
}




