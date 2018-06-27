// de esta manera puedo llamar a la api completamente
const GetApi = "http://web-unicen.herokuapp.com/api/groups/25-Hsieh-Ruiz/Pruebe";
// array donde se van a guardar todos los id y se usa dsp para generar los event listeners
let OnIds = [];
// variables de los imputs
let PostNumber;
let PostUser;
let PostVisitas;
let PostFollowers;
// event listeners a cada funcion, de esta manera se pueden pasar parametros
document.querySelector(".PostRest").addEventListener('click', function () {
    SendPost();
})
document.querySelector("#Sendx3").addEventListener('click', function () {
    SendPostx3();
})
document.querySelector("#Edit").addEventListener('click', function () {
    OnEdit();
})
// Obtener datos de los input
function GetObject() {
    PostUser = document.querySelector('#GetUser').value;
    PostNumber = document.querySelector('#GetPost').value;
    PostVisitas = document.querySelector('#GetVisitas').value;
    PostFollowers = document.querySelector('#GetFollowers').value;
}
// esta funcion es la que genera la tabla y obtiene los datos del Api
function getData() {
    fetch(GetApi, {
        method: "GET",
        mode: 'cors',
    }).then(function (r) {
        if (!r.ok) {
            console.log("error")
        }
        return r.json()
    })
        .then(function (json) {
            console.log(json);
            let contenedor = document.querySelector("#result");
            contenedor.innerHTML = "";
            let x = 0;
            for (let data of json.Pruebe) {
                let ApiId = data._id;
                let rowprueba = "<tr>"
                rowprueba += "<td>" + data.thing.User + "</td>";
                rowprueba += "<td>" + data.thing.Posts + "</td>";
                rowprueba += "<td>" + data.thing.Visitas + "</td>";
                rowprueba += "<td>" + data.thing.Seguidores + "</td>";
                // aca creamos una fila el cual tendra un boton con una clase que tiene una variable x que se va sumando por cada boton va a ser x++ despues le damos un name value que va a tener la id de la api por cada boton se puede ver que id es en el console log
                rowprueba += "<td>" + "<button class='btn btn-primary EditButton"+x+"' name=  " + ApiId + " >Editar </button" + "</td>";
                rowprueba += "<td>" + "<button class='btn btn-danger DelButton"+x+"' name=  " + ApiId + " >Borrar </button" + "</td>";
                OnIds.push(ApiId);
                rowprueba += "</tr>";
                contenedor.innerHTML += rowprueba;
                x++;
                
            }
            console.log(OnIds);
            GetIdJson();
            
        })
        .catch(function (e) {
            console.log(e)
        })
}
// esto fue lo mas dificil de terminar ya que con un for normal solo cuenta el ultimo indice para crear x event listeners

function GetIdJson() {
    // indice es J el cual recorrera el for indefinidamente hasta terminar con todas las id del json que anterior guarde en OnIds  
      for (let j = 0; j < OnIds.length; j++) {
        document.querySelector(".DelButton"+j).addEventListener('click', function() {
            // la variable x va a tener el name de cada clase que guardamos anteriormente y va iterar
            var x = document.querySelector(".DelButton"+j).name;
            borrarTabla(x);
          console.log(x);
          
        });
      }
}



function SendPost() {
    console.log("boton funciona?");

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

function borrarTabla(id) {
    fetch(GetApi + '/' + id, {
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
