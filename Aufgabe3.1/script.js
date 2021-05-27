"use strict";
var AufgabeC;
(function (AufgabeC) {
    document.getElementById("sendButton").addEventListener("click", getResponse);
    async function getResponse() {
        let formData = new FormData(document.forms[0]); //gibt das formdata objekt aus
        let data = { password: formData.get("pw").toString(), email: formData.get("email").toString() }; //values von email wurden in objekt data gespeichert und das wandel wir in einem string um 
        let query = new URLSearchParams(data); //neue query aus unserem objekt wurde erstellt 
        let url = "https://gis-example.herokuapp.com"; //da wird die url gesetzt
        url = url + "?" + query.toString(); //query der url hinzugefügt; ? = symbol für eine query
        let response = await fetch(url); //speichert die response die wir bekommen
        console.log(await response.text()); // wandelt in einem text um
    }
})(AufgabeC || (AufgabeC = {}));
//# sourceMappingURL=script.js.map