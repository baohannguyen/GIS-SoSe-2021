"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    document.getElementById("jsonButton").addEventListener("click", getAnswer);
    document.getElementById("htmlButton").addEventListener("click", getAnswer);
    async function getAnswer(_e) {
        let button = _e.target; //git element zurück wo wir geklickt haben, bei htmlbutton kriegen wir html und das gleiche für json
        let formData = new FormData(document.forms[0]); //gibt das formData objekt aus;
        let login = {
            firstName: formData.get("firstName").toString(), lastName: formData.get("lastName").toString(), birthday: formData.get("birthday").toString(),
            password: formData.get("pw").toString(), email: formData.get("email").toString()
        }; //values von den Daten wurden in das Objekt login gespeichert
        let query = new URLSearchParams(login); //eine neue query aus unserem Objekt wurde erstellt 
        let url = "http://localhost:8100"; //da wird die URL gesetzt
        switch (button.id) { //bedingung
            case "htmlButton": //den fall wenn es passiert
                url += "/html";
                //ein div element auf der seite mit dem html sachen befüllen
                //un bei json muss man in der konsole ausgeben
                break;
            case "jsonButton":
                url += "/json";
                break;
        }
        url = url + "?" + query.toString(); //query wurde der URL hinzugefügt; ? = Symbol für eine query; ? erscheint vor dem String/ der Zeichenkette in der URL
        let answer = await fetch(url); //speichert die Antwort die wir bekommen
        switch (button.id) { //bedingung
            case "htmlButton": //den fall wenn es passiert
                let p = document.getElementById("aufrufen");
                p.innerHTML = await answer.text();
                //ein div element auf der seite mit dem html sachen befüllen
                //un bei json muss man in der konsole ausgeben
                break;
            case "jsonButton":
                console.log(await answer.json());
                break;
        }
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=client.js.map