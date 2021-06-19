"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let sendButton = document.getElementById("sendData");
    let requestButton = document.getElementById("requestData");
    sendButton.addEventListener("click", addStudent);
    requestButton.addEventListener("click", getData);
    async function addStudent() {
        let formData = new FormData(document.forms[0]);
        let profil = { name: formData.get("name").toString(), birthday: formData.get("birthday").toString(), email: formData.get("email").toString() };
        let url = "http://localhost:8100/insert"; //https ist verschlüsselt und somit sicherer
        let query = new URLSearchParams(profil);
        url = url + "?" + query.toString();
        await fetch(url); // schickt die Anfrage an den Server
        let form = document.getElementById("profil"); //form element wird gespeichert
        form.reset(); //Inhalte werden zurückgesetzt
    }
    async function getData() {
        let output = document.getElementById("answer");
        let url = "http://localhost:8100/get";
        let response = await fetch(url);
        let dataString = await response.text();
        output.innerText = dataString;
    }
    //Mit Melanie Müller zusammengearbeitet
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=client.js.map