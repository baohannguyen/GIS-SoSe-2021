"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    document.getElementById("sendButton").addEventListener("click", getResponse);
    async function getResponse() {
        let formData = new FormData(document.forms[0]); //gibt das formData objekt aus;
        let login = { firstName: formData.get("firstName").toString(), lastName: formData.get("lastName").toString(), birthday: formData.get("birthday").toString(),
            password: formData.get("pw").toString(), email: formData.get("email").toString() }; //values von den daten wurden in das Objekt login gespeichert
        let query = new URLSearchParams(login); //neue query aus unserem Objekt wurde erstellt 
        let url = "https://banhbao.herokuapp.com"; //da wird die URL gesetzt
        url = url + "?" + query.toString(); //query der URL hinzugefügt; ? = symbol für eine query
        let response = await fetch(url); //speichert die Response/Antwort die wir bekommen
        console.log(await response.text()); // wandelt in einem text um
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {})); //Mit Melanie Müller zusammengearbeitet
//# sourceMappingURL=script.js.map