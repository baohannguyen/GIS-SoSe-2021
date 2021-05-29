"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    document.getElementById("sendButton").addEventListener("click", getAnswer);
    async function getAnswer() {
        let formData = new FormData(document.forms[0]); //gibt das formData objekt aus;
        let login = { firstName: formData.get("firstName").toString(), lastName: formData.get("lastName").toString(), birthday: formData.get("birthday").toString(),
            password: formData.get("pw").toString(), email: formData.get("email").toString() }; //values von den Daten wurden in das Objekt login gespeichert
        let query = new URLSearchParams(login); //eine neue query aus unserem Objekt wurde erstellt 
        let url = "https://banhbao.herokuapp.com"; //da wird die URL gesetzt
        url = url + "?" + query.toString(); //query wurde der URL hinzugefügt; ? = Symbol für eine query; ? erscheint vor dem String/ der Zeichenkette in der URL
        let answer = await fetch(url); //speichert die Antwort die wir bekommen
        console.log(await answer.text()); // wandelt in einem Text um
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {})); //Mit Melanie Müller zusammengearbeitet
//# sourceMappingURL=script.js.map