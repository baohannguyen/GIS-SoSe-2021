"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    let dataStorage = null;
    function daten() {
        dataStorage = JSON.parse(Aufgabe2.dataJSON); // JSON-Format wird in ein TypeScript-Objekt konvertiert
    }
    daten();
    let allSelection = [];
    let allFilling = [];
    let allExtras = [];
    seeData();
    function seeData() {
        for (let i = 0; i < Aufgabe2.data.length; i++) {
            let attributeStorage = Aufgabe2.data[i].split("+");
            switch (attributeStorage[0]) {
                case "Selection":
                    allSelection[allSelection.length] = { type: attributeStorage[1], typePicture: attributeStorage[2], price: Number(attributeStorage[3]), numberOfPieces: Number(attributeStorage[4]) };
                    break;
            }
        }
        for (let i = 0; i < Aufgabe2.data.length; i++) {
            let attributeStorage = Aufgabe2.data[i].split("+");
            switch (attributeStorage[0]) {
                case "Filling":
                    allFilling[allFilling.length] = { type: attributeStorage[1], typePicture: attributeStorage[2], price: Number(attributeStorage[3]) };
                    break;
            }
        }
        for (let i = 0; i < Aufgabe2.data.length; i++) {
            let attributeStorage = Aufgabe2.data[i].split("+");
            switch (attributeStorage[0]) {
                case "Extras":
                    allExtras[allExtras.length] = { extra1: attributeStorage[1], extra2: attributeStorage[2], extra3: attributeStorage[3], price: Number(attributeStorage[4]) };
            }
            function seeVar() {
                for (let i = 0; i < allSelection.length; i++) {
                    let container = document.createElement("div");
                    container.setAttribute("class", "containerSelection");
                    document.querySelector("main").appendChild(container);
                    let canvas = document.createElement("canvas");
                    canvas.setAttribute("style", "width:250px; height:200px");
                    canvas.setAttribute("id", "canvas" + i);
                    container.appendChild(canvas);
                    let list = document.createElement("ul");
                    container.appendChild(list);
                    let listelement = document.createElement("li");
                    listelement.appendChild(document.createTextNode(allSelection[i].type));
                    let listelement2 = document.createElement("li");
                    listelement2.appendChild(document.createTextNode("Preis: " + allSelection[i].price));
                    let listelement3 = document.createElement("li");
                    listelement3.appendChild(document.createTextNode("Stückzahl: " + allSelection[i].numberOfPieces));
                    container.appendChild(list);
                    list.appendChild(listelement);
                    list.appendChild(listelement2);
                    list.appendChild(listelement3);
                    let button = document.createElement("button");
                    button.setAttribute("id", "button" + allSelection[i].type);
                    button.appendChild(document.createTextNode(allSelection[i].type + " auswählen"));
                    button.addEventListener("click", electTypeOne);
                    container.appendChild(button);
                }
            }
            seeVar();
            break;
            function electTypeOne(_event) {
                let button = _event.target;
                switch (button.id) {
                    case "buttonHoso-Maki":
                        console.log("Sie haben sich für Hoso-Maki entschieden");
                        break;
                    case "buttonNigiri":
                        console.log("Sie haben sich für Nigiri entschieden");
                        break;
                    case "buttonTemaki":
                        console.log("Sie haben sich für Temaki entschieden");
                        break;
                }
            }
        }
        localStorage.setItem("Auswahl", "Hoso-Maki");
        console.log(localStorage.getItem("Auswahl"));
        localStorage.setItem("Auswahl", "Nigiri");
        console.log(localStorage.getItem("Auswahl"));
        localStorage.setItem("Auswahl", "Temaki");
        console.log(localStorage.getItem("Auswahl"));
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=sushi.js.map