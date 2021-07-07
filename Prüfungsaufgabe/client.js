"use strict";
var Memoryaufgabe;
(function (Memoryaufgabe) {
    let insertButton = document.getElementById("insertPicture");
    insertButton.addEventListener("click", addPicture);
    async function addPicture() {
        let formData = new FormData(document.forms[0]); //gibt das formData Objekt aus
        let pics = { link: formData.get("newPicture").toString() }; //Werte von dem Interface wurde in das Objekt gespeichert
        let query = new URLSearchParams(pics);
        let url = "http://localhost:8100/insertURL"; //URL wird hier gesetzt
        url = url + "?" + query.toString();
        await fetch(url);
        let form = document.getElementById("memory");
        form.reset();
    }
    async function getPictures() {
        let output = document.getElementById("showPic");
        let url = "http://localhost:8100/getPicture";
        let response = await fetch(url); //speichert die Antwort
        // console.log(await response.text());
        let dataString = await response.json();
        // output.innerHTML = dataString;
    }
    getPictures();
})(Memoryaufgabe || (Memoryaufgabe = {}));
//# sourceMappingURL=client.js.map