"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    let allSelection = [];
    seeData();
    function seeData() {
        for (let i = 0; i < Aufgabe2.data.length; i++) {
            let attributeStorage = Aufgabe2.data[i].split("+");
            switch (attributeStorage[0]) {
                case "Selection":
                    allSelection[allSelection.length] = { type: attributeStorage[1], typePicture: attributeStorage[2], price: Number(attributeStorage[3]), numberOfPieces: Number(attributeStorage[4]) };
                    break; // für Filling und Extras das selbe machen, wenn man die anderen Seiten auch sehen möchte 
            }
        }
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
            container.appendChild(list);
            list.appendChild(listelement);
            list.appendChild(listelement2);
        }
    }
    seeVar();
    function electTypeOne() {
        console.log("Sie haben sich für Hoso-Maki entschieden");
    }
    document.querySelector("button").addEventListener("click", electTypeOne);
    function electTypeTwo() {
        console.log("Sie haben sich für Nigiri entschieden");
    }
    document.querySelector("#typeTwo").addEventListener("click", electTypeTwo);
    function electTypeThree() {
        console.log("Sie haben sich für Temaki entschieden");
    }
    document.querySelector("#typeThree").addEventListener("click", electTypeThree);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=sushi.js.map