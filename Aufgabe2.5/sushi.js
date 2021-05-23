"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    let dataStorage;
    //Aufgabe b)
    async function changeData(_url) {
        let seeJSON = await fetch(_url);
        dataStorage = await seeJSON.json();
        mainData();
    }
    changeData("https://baohannguyen.github.io/GIS-SoSe-2021/Aufgabe2.5/data.json");
    function mainData() {
        let allSelection = dataStorage.selection;
        let allFilling = dataStorage.filling;
        let allExtras = dataStorage.extras;
        function seeSelection() {
            for (let i = 0; i < allSelection.length; i++) {
                let container = document.createElement("div");
                container.setAttribute("class", "containerSelection");
                document.querySelector("#choices").appendChild(container);
                let image = document.createElement("img");
                image.setAttribute("src", allSelection[i].typePicture);
                container.appendChild(image);
                let list = document.createElement("ul");
                container.appendChild(list);
                let listelement = document.createElement("li");
                listelement.appendChild(document.createTextNode(allSelection[i].type));
                let listelement2 = document.createElement("li");
                listelement2.appendChild(document.createTextNode("Preis: " + allSelection[i].price));
                container.appendChild(list);
                list.appendChild(listelement);
                list.appendChild(listelement2);
                let button = document.createElement("button");
                button.setAttribute("id", "button" + allSelection[i].type);
                button.appendChild(document.createTextNode(allSelection[i].type + " auswählen"));
                button.addEventListener("click", electType);
                container.appendChild(button);
            }
        }
        function seeFilling() {
            for (let i = 0; i < allFilling.length; i++) {
                let ctn = document.createElement("div");
                ctn.setAttribute("class", "containerFilling");
                document.querySelector("#choices").appendChild(ctn);
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
                button.addEventListener("click", electType);
                ctn.appendChild(button);
            }
            let img = document.createElement("img");
            let optionOne = JSON.parse(localStorage.getItem("Auswahl"));
            img.setAttribute("src", optionOne.typePicture);
            document.getElementById("selection").appendChild(img);
        }
        function seeExtras() {
            for (let i = 0; i < allExtras.length; i++) {
                let cont = document.createElement("div");
                cont.setAttribute("class", "containerExtras");
                document.querySelector("#choices").appendChild(cont);
                let image = document.createElement("img");
                image.setAttribute("src", allExtras[i].typePicture);
                cont.appendChild(image);
                let list = document.createElement("ul");
                cont.appendChild(list);
                let listelement = document.createElement("li");
                listelement.appendChild(document.createTextNode(allExtras[i].type));
                let listelement2 = document.createElement("li");
                listelement2.appendChild(document.createTextNode("Preis: " + allExtras[i].price));
                cont.appendChild(list);
                list.appendChild(listelement);
                list.appendChild(listelement2);
                let button = document.createElement("button");
                button.setAttribute("id", "button" + allExtras[i].type);
                button.appendChild(document.createTextNode(allExtras[i].type + " auswählen"));
                button.addEventListener("click", electType);
                cont.appendChild(button);
            }
            let img = document.createElement("img");
            let optionOne = JSON.parse(localStorage.getItem("Auswahl"));
            img.setAttribute("src", optionOne.typePicture);
            document.getElementById("selection").appendChild(img);
            let imgFilling = document.createElement("img");
            let optionTwo = JSON.parse(localStorage.getItem("Füllung"));
            imgFilling.setAttribute("src", optionTwo.typePicture);
            document.getElementById("selection").appendChild(imgFilling);
        }
        function electType(_event) {
            let button = _event.target;
            switch (button.id) {
                case "buttonHoso-Maki":
                    localStorage.setItem("Auswahl", JSON.stringify(dataStorage.selection[0]));
                    console.log("Sie haben sich für Hoso-Maki entschieden");
                    window.location.href = "filling.html";
                    break;
                case "buttonNigiri":
                    localStorage.setItem("Auswahl", JSON.stringify(dataStorage.selection[1]));
                    console.log("Sie haben sich für Nigiri entschieden");
                    window.location.href = "filling.html";
                    break;
                case "buttonTemaki":
                    localStorage.setItem("Auswahl", JSON.stringify(dataStorage.selection[2]));
                    console.log("Sie haben sich für Temaki entschieden");
                    window.location.href = "filling.html";
                    break;
                case "buttonLachs":
                    localStorage.setItem("Füllung", JSON.stringify(dataStorage.filling[0]));
                    console.log("Sie haben sich für Lachs entschieden");
                    window.location.href = "extras.html";
                    break;
                case "buttonAvocado":
                    localStorage.setItem("Füllung", JSON.stringify(dataStorage.filling[1]));
                    console.log("Sie haben sich für Avocado entschieden");
                    window.location.href = "extras.html";
                    break;
                case "buttonThunfisch":
                    localStorage.setItem("Füllung", JSON.stringify(dataStorage.filling[2]));
                    console.log("Sie haben sich für Thunfisch entschieden");
                    window.location.href = "extras.html";
                    break;
                case "buttonVegan":
                    localStorage.setItem("Extras", JSON.stringify(dataStorage.extras[0]));
                    console.log("Sie haben sich für Vegan entschieden");
                    window.location.href = "result.html";
                    break;
                case "buttonScharf":
                    localStorage.setItem("Extras", JSON.stringify(dataStorage.extras[1]));
                    console.log("Sie haben sich für Scharf entschieden");
                    window.location.href = "result.html";
                    break;
                case "buttonFrittiert":
                    localStorage.setItem("Extras", JSON.stringify(dataStorage.extras[2]));
                    console.log("Sie haben sich für Frittiert entschieden");
                    window.location.href = "result.html";
                    break;
            }
        }
        async function response() {
            let url = "https://gis-communication.herokuapp.com";
            let query = new URLSearchParams(dataStorage);
            url = url + "?" + query.toString();
            let response = await fetch(url);
            let message = await response.json();
            console.log(JSON.stringify(message));
            let emptyMessage = document.getElementById("message");
            if (message.message) {
                emptyMessage.style.color = "darkgreen";
                emptyMessage.innerText = message.message;
            }
            else {
                emptyMessage.style.color = "crimson";
                emptyMessage.innerText = message.error;
            }
        }
        function seeResult() {
            let img = document.createElement("img");
            let optionOne = JSON.parse(localStorage.getItem("Auswahl"));
            img.setAttribute("src", optionOne.typePicture);
            document.querySelector("main").appendChild(img);
            let imgFilling = document.createElement("img");
            let optionTwo = JSON.parse(localStorage.getItem("Füllung"));
            imgFilling.setAttribute("src", optionTwo.typePicture);
            document.querySelector("main").appendChild(imgFilling);
            let imgExtras = document.createElement("img");
            let optionThree = JSON.parse(localStorage.getItem("Extras"));
            imgExtras.setAttribute("src", optionThree.typePicture);
            document.querySelector("main").appendChild(imgExtras);
            let div = document.createElement("div");
            div.id = "dataButton";
            let dataButton = document.createElement("button");
            dataButton.appendChild(document.createTextNode("Sende Daten"));
            dataButton.addEventListener("click", response);
            document.querySelector("div").appendChild(dataButton);
            let emptyMessage = document.createElement("p");
            emptyMessage.id = "message";
            document.body.appendChild(emptyMessage);
        }
        function site() {
            if (document.URL.includes("index2")) { //da wird abgefragt ob die jetzige Seite die index2.html ist 
                seeSelection();
            }
            else if (document.URL.includes("filling")) {
                seeFilling();
            }
            else if (document.URL.includes("extras")) {
                seeExtras();
            }
            else {
                seeResult();
            }
        }
        site();
    }
})(Aufgabe2 || (Aufgabe2 = {})); //Zusammengearbeitet mit Melanie Müller
//# sourceMappingURL=sushi.js.map