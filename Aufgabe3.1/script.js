"use strict";
var AufgabeC;
(function (AufgabeC) {
    document.getElementById("sendButton").addEventListener("click", getResponse);
    async function getResponse() {
        let formData = new FormData(document.forms[0]); //gibt das formdata objekt aus
        let data = { password: formData.get("pw").toString(), email: formData.get("email").toString() };
        let query = new URLSearchParams(data);
        let url = "https://gis-example.herokuapp.com"; //da wird die url gesetzt
        url = url + "?" + query.toString();
        let response = await fetch(url); //speichern die response die wir bekommen
        console.log(await response.text()); // wandelt in einem text um
    }
})(AufgabeC || (AufgabeC = {}));
//# sourceMappingURL=script.js.map