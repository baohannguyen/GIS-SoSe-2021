"use strict";
var Memoryaufgabe;
(function (Memoryaufgabe) {
    let insertButton = document.getElementById("insertPicture");
    insertButton.addEventListener("click", addPicture);
    async function addPicture() {
        let formData = new FormData(document.forms[0]); //gibt das formData Objekt aus
        let bilder = { link: formData.get("newPicture").toString() }; //Werte von den Interface wurde in das Objekt gespeichert
        let query = new URLSearchParams(bilder);
        let url = "http://localhost:8100/insertURL"; //URL wird hier gesetzt
        url = url + "?" + query.toString();
        await fetch(url);
    }
    async function getPictures() {
        let url = "http://localhost:8100/getPicture";
        let response = await fetch(url); //speichert die Antwort
        console.log(await response.text());
    }
    getPictures();
})(Memoryaufgabe || (Memoryaufgabe = {}));
//# sourceMappingURL=client.js.map