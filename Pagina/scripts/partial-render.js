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

if (firstOpen == true) {
    loadHomeFirstTime();
}

function loadHome(event) {
    fetch("html/home.html").then(function (response) {
        console.log("recibi la promesa");
        console.log(response);
        response.text().then(t => document.querySelector("#render").innerHTML = t);
    });
}
function loadHomeFirstTime() {
    // setTimeout(() => {
        fetch("html/home.html").then(function (response) {
            console.log("recibi la promesa");
            console.log(response);
            response.text().then(t => document.querySelector("#render").innerHTML = t);
            setTimeout(() => {
                eventPost();    
            }, 2000);
            
        });
    // }, 3000);

    firstOpen = false;  
}
function loadUsers(event) {
    fetch("html/tabla.html").then(function (response) {
        console.log("recibi la promesa");
        console.log(response);
        response.text().then(t => document.querySelector("#render").innerHTML = t);
    });
}
function loadCategories(event) {
    fetch("html/categories.html").then(function (response) {
        console.log("recibi la promesa");
        console.log(response);
        response.text().then(t => document.querySelector("#render").innerHTML = t);
    });
}
function loadLog(event) {
    fetch("html/log.html").then(function (response) {
        console.log("recibi la promesa");
        console.log(response);
        response.text().then(t => document.querySelector("#render").innerHTML = t);
    });
}
function loadPost(event) {
    fetch("html/post.html").then(function (response) {
        console.log("recibi la promesa");
        console.log(response);
        response.text().then(t => document.querySelector("#render").innerHTML = t);
    });
}
function eventPost() {
    let jspost = document.querySelectorAll(".js-post");
    jspost.forEach(e => e.addEventListener("click", loadPost)); 
}