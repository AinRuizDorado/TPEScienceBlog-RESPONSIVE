// de esta manera puedo llamar a la api completamente
const API = "http://web-unicen.herokuapp.com/api/groups/25-Hsieh-Ruiz/Pruebe";
// array donde se van a guardar todos los id y se usa dsp para generar los event listeners
let OnIds = [];
let EditId;
// variables de los imputs
let PostNumber;
let PostUser;
let PostVisitas;
let PostFollowers;
let EditNumber;
let EditUser;
let EditVisitas;
let EditFollowers;
// event listeners a cada funcion, de esta manera se pueden pasar parametros
$(".PostRest").click(function () {
    SendPost();
    console.log("sendpost was clicked");
});
$(".pruebax").click(function () {
    getDatajquery();
    console.log("RECIBI el click");

})
$("#Sendx3").click(function () {
    SendPostx3();
    console.log("Sendx3 was clicked");
});
$("#EditData").click(function () {
    SendEditTable(EditId);
    console.log("EditData was clicked");
});
// Obtener datos de los input
function GetObject() {
    PostUser = document.querySelector('#GetUser').value;
    PostNumber = document.querySelector('#GetPost').value;
    PostVisitas = document.querySelector('#GetVisitas').value;
    PostFollowers = document.querySelector('#GetFollowers').value;
}
// esto esta doble para no hacer colision si el usuario quiere crear y editar un post al mismo tiempo
function GetObjectEdit() {
    EditUser = document.querySelector('#EditUser').value;
    EditNumber = document.querySelector('#EditPost').value;
    EditVisitas = document.querySelector('#EditVisitas').value;
    EditFollowers = document.querySelector('#EditFollowers').value;
}
// esta funcion es la que genera la tabla y obtiene los datos del Api
function getData() {
    $.ajax({
        url: API,
        type: 'GET',
        dataType: 'json', // added data type
        success: function (promesa) {
            console.log(promesa);
            // contenedor donde se va a crear la tabla
            let contenedor = document.querySelector("#result");
            contenedor.innerHTML = "";
            let x = 0;
            for (let data of promesa.Pruebe) {
                let ApiId = data._id;
                let InRow = "<tr>"
                InRow += "<td>" + data.thing.User + "</td>" + "<td>" + data.thing.Posts + "</td>";
                InRow += "<td>" + data.thing.Visitas + "</td>" + "<td>" + data.thing.Seguidores + "</td>";
                // aca creamos una fila el cual tendra un boton con una clase que tiene una variable x que se va sumando por cada boton va a ser x++ despues le damos un name value que va a tener la id de la api por cada boton se puede ver que id es en el console log
                InRow += "<td>" + "<button class='btn btn-primary EditButton" + x + "' name=  " + ApiId + " >Editar </button" + "</td>";
                InRow += "<td>" + "<button class='btn btn-danger DelButton" + x + "' name=  " + ApiId + " >Borrar </button" + "</td>";
                // pusheamos al ultimo lugar del array las id de cada item en orden del JSON
                OnIds.push(ApiId);
                InRow += "</tr>";
                contenedor.innerHTML += InRow;
                x++;

            }
            // debug log, actua el getidjson que genera todos los event listener al final de la tabla
            console.log(OnIds);
            GetIdJson();
        }
    });
}

// esto fue lo mas dificil de terminar ya que con un for normal solo cuenta el ultimo indice para crear x event listeners encontre un post de un chinito en internet que me ayudo a completarlo
function GetIdJson() {
    // indice es J el cual recorrera el for indefinidamente hasta terminar con todas las id del json que anterior guarde en OnIds  
    for (let j = 0; j < OnIds.length; j++) {
        document.querySelector(".DelButton" + j).addEventListener('click', function () {
            // la variable x va a tener el name de cada clase que guardamos anteriormente y va iterar
            var x = document.querySelector(".DelButton" + j).name;
            DelTabla(x);
        });
    }
    for (let y = 0; y < OnIds.length; y++) {
        document.querySelector(".EditButton" + y).addEventListener('click', function () {
            // la variable x va a tener el name de cada clase que guardamos anteriormente y va iterar
            var x = document.querySelector(".EditButton" + y).name;
            EditTable(x, y);
            console.log(y);
        });
    }
}



function SendPost() {
    // obtenemos los .value de cada input con esta funcion
    GetObject();
    let PostObject = {
        "thing": {
            "User": PostUser,
            "Posts": PostNumber,
            "Visitas": PostVisitas,
            "Seguidores": PostFollowers
        }
    }
    // debug log
    console.log(PostUser);
    console.log(PostNumber);
    console.log(PostVisitas);
    console.log(PostFollowers);


    fetch(API, {
        'method': 'POST',
        'headers': {
            'Content-type': 'application/json'
        },
        'body': JSON.stringify(PostObject)
    }).then(response => {
        if (response.ok) {
            response.json().then(r => {
                console.log("Exito");
                reset();
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
    // reset para las variables y que no se repitan al ingresar nuevamente en los campos
    reset();
    console.log(PostUser);
    console.log(PostNumber);
    console.log(PostVisitas);
    console.log(PostFollowers);

}




function SendPostx3() {
    // reset de variables
    PostNumber = undefined;
    PostUser = undefined;
    PostVisitas = undefined;
    PostFollowers = undefined;
    GetObject();
    let PostObject = {
        "thing": {
            "User": PostUser,
            "Posts": PostNumber,
            "Visitas": PostVisitas,
            "Seguidores": PostFollowers
        }
    }
    // obtenemos el objeto y lo enviamos 3 veces en 3 diferentes fetch
    fetch(API, {
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
    fetch(API, {
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
    fetch(API, {
        'method': 'POST',
        'headers': {
            'Content-type': 'application/json'
        },
        'body': JSON.stringify(PostObject)
    }).then(response => {
        if (response.ok) {
            response.json().then(r => {
                console.log("Exito");
                reset();
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

function DelTabla(id) {
    fetch(API + '/' + id, {
        'method': 'DELETE',
        'headers': {
            'Content-type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            response.json().then(t => {
                getData();
                console.log("exito erased");
            })
        } else {
            console.log("file");
        }
    })
        .catch(
            function (response) {
                console.log("conexion");

            }
        )
}
// pasamos la id a una variable global para despues pasarlo a otra funcion a donde lo mande
function EditTable(id, key) {
    // la key solo tiene un indice el cual sabe que posicion del JSON tiene que actuar
    EditId = id;
    fetch(API, {
        method: "GET",
        mode: 'cors',
    }).then(function (r) {
        if (!r.ok) {
            console.log("error")
        }
        return r.json()
    })
        .then(function (json) {
            console.log(json.Pruebe[key]);
            document.querySelector('#EditUser').value = json.Pruebe[key].thing.User;
            document.querySelector('#EditPost').value = json.Pruebe[key].thing.Posts;
            document.querySelector('#EditVisitas').value = json.Pruebe[key].thing.Visitas;
            document.querySelector('#EditFollowers').value = json.Pruebe[key].thing.Seguidores;
        })
        .catch(function (e) {
            console.log(e)
        });


}
// recibe el parametro id para saber que item modificar
function SendEditTable(id) {
    // al igual que para enviar obtenemos el objeto .value a modificar
    GetObjectEdit();
    let EditObject = {
        "thing": {
            "User": EditUser,
            "Posts": EditNumber,
            "Visitas": EditVisitas,
            "Seguidores": EditFollowers
        }
    };
    // lo enviamos a la api / id 
    fetch(API + '/' + id, {
        "method": "PUT",
        "mode": 'cors',
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(EditObject)
    }).then(function (r) {
        if (!r.ok) {
            console.log("Error")
        }
        return r.json()
    })
        .then(function (json) {
            console.log("Exito");
            reset();
        })
        .catch(function (e) {
            console.log(e)
        })
}
// Reset de variables y refresh de la tabla
function reset() {
    let contenedor = document.querySelector("#result");
    contenedor.innerHTML = "cargando....";
    PostNumber = undefined;
    PostUser = undefined;
    PostVisitas = undefined;
    PostFollowers = undefined;
    getData();
}

getData();
