"use strict";
const GetApi = "http://web-unicen.herokuapp.com/api/groups/25-Hsieh-Ruiz/Prueba";
let OnUsers = document.querySelector(".users");
let OnRender = document.querySelector(".render");

let PostNumber;
let PostUser;
let PostVisitas;
let PostFollowers;

let mandarapi = document.querySelector(".postapi");
mandarapi.addEventListener("click", OnPost);



function GetObject() {
    PostUser = document.querySelector('#GetUser').value;
    PostNumber = document.querySelector('#GetPost').value;
    PostVisitas = document.querySelector('#GetVisitas').value;
    PostFollowers = document.querySelector('#GetFollowers').value;
}

function OnPost() {
    GetObject();
    let PostObject = {
        "thing": {
            "User": PostUser,
            "Posts": PostNumber,
            "Visitas": PostVisitas,
            "Seguidores": PostFollowers
        }
    }
    console.log(PostUser);
    console.log(PostNumber);
    console.log(PostVisitas);
    console.log(PostFollowers);

    fetch(GetApi, {
        'method': 'POST',
        'headers': {
            'Content-type': 'application/json'
        },
        'body': JSON.stringify(PostObject)
    }).then(response => {
        if (response.ok) {
            response.json().then(r => {
                console.log("Exito");
            })
        } else {
            console.log("error object");
        }
    })
        .catch(
            function (response) {
                console.log("error server");
            }
        )
}
