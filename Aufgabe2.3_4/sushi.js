"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    function daten() {
        let dataStorage = null;
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
                    allExtras[allExtras.length] = { extra: attributeStorage[1], price: Number(attributeStorage[2]) };
            }
            seeVar();
            break;
            function seeVar() {
                for (let i = 0; i < allSelection.length; i++) {
                    let container = document.createElement("div");
                    container.setAttribute("class", "containerSelection");
                    document.querySelector("main").appendChild(container);
                    let image = document.createElement("img");
                    image.setAttribute("src", allSelection[i].typePicture);
                    container.appendChild(image);
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
                for (let i = 0; i < allFilling.length; i++) {
                    let ctn = document.createElement("div");
                    ctn.setAttribute("class", "containerFilling");
                    document.querySelector("main").appendChild(ctn);
                    let image = document.createElement("img");
                    image.setAttribute("src", allFilling[i].typePicture);
                    ctn.appendChild(image);
                    let list = document.createElement("ul");
                    ctn.appendChild(list);
                    let listelement = document.createElement("li");
                    listelement.appendChild(document.createTextNode(allFilling[i].type));
                    let listelement2 = document.createElement("li");
                    listelement2.appendChild(document.createTextNode("Preis: " + allFilling[i].price));
                    ctn.appendChild(list);
                    list.appendChild(listelement);
                    list.appendChild(listelement2);
                    let button = document.createElement("button");
                    button.setAttribute("id", "button" + allFilling[i].type);
                    button.appendChild(document.createTextNode(allFilling[i].type + " auswählen"));
                    ctn.appendChild(button);
                }
                for (let i = 0; i < allExtras.length; i++) {
                    let cont = document.createElement("div");
                    cont.setAttribute("class", "containerExtras");
                    document.querySelector("main").appendChild(cont);
                    let image = document.createElement("img");
                    image.setAttribute("src", allExtras[i].extra);
                    cont.appendChild(image);
                    let list = document.createElement("ul");
                    cont.appendChild(list);
                    let listelement = document.createElement("li");
                    listelement.appendChild(document.createTextNode(allExtras[i].extra));
                    let listelement2 = document.createElement("li");
                    listelement2.appendChild(document.createTextNode("Preis: " + allExtras[i].price));
                    cont.appendChild(list);
                    list.appendChild(listelement);
                    list.appendChild(listelement2);
                    let button = document.createElement("button");
                    button.setAttribute("id", "button" + allExtras[i].extra);
                    button.appendChild(document.createTextNode(allExtras[i].extra + " auswählen"));
                    cont.appendChild(button);
                }
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
        }
        function storage() {
            localStorage.setItem("Auswahl", "Hoso-Maki");
            console.log(localStorage.getItem("Auswahl"));
            localStorage.setItem("Auswahl", "Nigiri");
            console.log(localStorage.getItem("Auswahl"));
            localStorage.setItem("Auswahl", "Temaki");
            console.log(localStorage.getItem("Auswahl"));
        }
        storage();
        //     let fillingSite: Filling[] = undefined;
        //     let actualSite: string = undefined;
        //     if (document.URL.includes("index2")) { // damit wird abgefragt ob die jetzige seite die index2.html Seite ist
        //         let selectionSite: Selection[] = undefined;
        //         selectionSite = allSelection;
        //         actualSite = dataStorage.selection.toString();
        //     } else if (document.URL.includes("filling")) {
        //         fillingSite = allFilling;
        //         actualSite = dataStorage.filling.toString();
        //     }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=sushi.js.map