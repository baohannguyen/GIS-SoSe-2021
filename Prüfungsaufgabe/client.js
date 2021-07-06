"use strict";
var Prüfungsaufgabe;
(function (Prüfungsaufgabe) {
    let insertButton = document.getElementById("insertPicture");
    insertButton.addEventListener("click", addPicture);
    async function addPicture() {
        let formData = new FormData(document.forms[0]); //gibt das formData Objekt aus
        let bilder = { link: formData.get("newPicture").toString() }; //Werte von den Interface wurde in das Objekt gespeichert
        let query = new URLSearchParams(bilder);
        let url = "https://banhbao.herokuapp.com/insertURL"; //URL wird hier gesetzt
        url = url + "?" + query.toString();
        await fetch(url);
    }
    async function getPictures() {
        let url = "https://banhbao.herokuapp.com/getPicture";
        let response = await fetch(url); //speichert die Antwort
        console.log(await response.text());
    }
    getPictures();
})(Prüfungsaufgabe || (Prüfungsaufgabe = {}));
//# sourceMappingURL=client.js.map