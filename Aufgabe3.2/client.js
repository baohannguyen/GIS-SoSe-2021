"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    document.getElementById("jsonButton").addEventListener("click", getAnswer);
    document.getElementById("htmlButton").addEventListener("click", getAnswer);
    async function getAnswer(_e) {
        let button = _e.target; //gibt das Element zurück wo wir geklickt haben, bei htmlbutton kriegen wir html raus und das gleiche für json
        let formData = new FormData(document.forms[0]); //gibt das formData objekt aus;
        let login = { firstName: formData.get("firstName").toString(), lastName: formData.get("lastName").toString(), birthday: formData.get("birthday").toString(),
            password: formData.get("pw").toString(), email: formData.get("email").toString(), data: formData.get("data").toString() }; //values von den Daten wurden in das Objekt login gespeichert
        let query = new URLSearchParams(login); //eine neue query aus unserem Objekt wurde erstellt 
        let url = "https://banhbao.herokuapp.com/";
        switch (button.id) {
            case "htmlButton": //den Fall wenn es passiert
                url += "html"; //"html" wird an der url angehängt
                break;
            case "jsonButton":
                url += "json";
                break;
        }
        url = url + "?" + query.toString(); //query wurde der URL hinzugefügt; ? = Symbol für eine query; ? erscheint vor dem String/ der Zeichenkette in der URL
        let answer = await fetch(url); //speichert die Antwort die wir bekommen
        switch (button.id) {
            case "htmlButton":
                let p = document.getElementById("pTag");
                p.innerHTML = await answer.text();
                break;
            case "jsonButton":
                console.log(await answer.json());
                break;
        }
    } //Mit Melanie Müller zusammengearbeitet
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=client.js.map