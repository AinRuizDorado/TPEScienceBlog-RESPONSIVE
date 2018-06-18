"use strict";
let random = 0;
const max = 7;
let arr = document.getElementsByClassName("arr");
let PressButton = document.getElementsByClassName('gamebutton');
let marcas = [];
let point;
let numberofcoins = 0;
let numberofbowser = 0;
let DisableButton = true;
let win = 0;
let hit = 0;
let errors = 0;
let totalhit = 0;
let totalerrors = 0;


function GetGame() {

    marcas = [];
    numberofcoins = 0;
    numberofbowser = 0;
    win = 0;
    hit = 0;
    errors = 0;
    totalhit = 0;
    totalerrors = 0;

    RefreshBowserText();
    RefreshCoinText();

    for (let i = 0; i < arr.length; i++) {
        document.getElementById("buttontext").innerHTML = "Restart";

        random = Math.random();
        if (random >= 0.5) {
            document.getElementById("marca" + [i]).src = "../img/coin.png";
            marcas.push(1);
            numberofcoins++;
        } else {
            document.getElementById("marca" + [i]).src = "../img/bowser.png";
            marcas.push(0);
            numberofbowser++;
        }
    }
    if (numberofcoins == 8 || numberofbowser == 8) {
        alert("Felicitaciones, han salido 8 coins o 8 bowsers y se le dio una victoria automatica");
    }
    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            document.getElementById("marca" + [i]).src = "../img/card.png";
        }
        DisableButton = false;
        GameCondition();
    }, 3000);


    console.log(random);
    console.log(marcas);
    console.log("Bowsers: " + numberofbowser + "y coins: " + numberofcoins);

}

function GetCard(point) {
    if (DisableButton == false) {
        console.log("me llego el numero " + point);
        if (marcas[point] == 1) {
            console.log("me llego un 1");
            document.getElementById("marca" + [point]).src = "../img/coin.png";
            numberofcoins--;
            hit++;
            totalhit++;
            RefreshCoinText();
            GameCondition();
            PressButton[point].disabled = true;
        } else {
            console.log("me llego un 0");
            document.getElementById("marca" + [point]).src = "../img/bowser.png";
            numberofbowser--;
            errors++;
            totalerrors++;
            RefreshBowserText();
            GameCondition();
            PressButton[point].disabled = true;
        }
        
    }

}


function GameCondition() {
    if (numberofcoins == 0) {
        DisableButton = true;
        console.log(DisableButton);
        win++;
        WinCondition();
        alert("preparando el siguiente juego");
        NextGame();
        console.log("Ganadas:" + win);
    }
}


function WinCondition() {
    if (win == 3) {
        alert("Bien jugado! Gano su tercer partida consecutiva!");
        win = 0;
    }
}



function NextGame() {
    numberofcoins = 0;
    numberofbowser = 0;
    RefreshBowserText();
    RefreshCoinText();
    for (let i = 0; i < arr.length; i++) {
        if (marcas[i] == 1) {
            marcas[i] = 0;
            document.getElementById("marca" + [i]).src = "../img/bowser.png";
            numberofbowser++;
        }
        else {
            marcas[i] = 1;
            document.getElementById("marca" + [i]).src = "../img/coin.png";
            numberofcoins++;
        }
    }
    console.log(marcas);
    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            document.getElementById("marca" + [i]).src = "../img/card.png";
        }
        hit = 0;
        errors = 0;
        GameCondition();
        DisableButton = false;
    }, 3000);
    ResetButtons();
}


function RefreshCoinText() {
    document.getElementById("globalhits").innerHTML = "Aciertos de la partida: " + totalhit;
    document.getElementById("hits").innerHTML = "Aciertos del tablero: " + hit;
}

function RefreshBowserText() {
    document.getElementById("globalerrors").innerHTML = "Errores de la partida: " + totalerrors;
    document.getElementById("prueba").innerHTML = "Errores del tablero: " + errors;
}

function ResetButtons() {
    for (let i = 0; i <= PressButton.length; i++) {
        PressButton[i].disabled = false;
    }
    
}