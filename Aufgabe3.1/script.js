"use strict";
var AufgabeC;
(function (AufgabeC) {
    let formData = new FormData(document.forms[0]); //gibt das formdata objekt aus
    document.getElementById("sendButton").addEventListener("click", getResponse);
    async function getResponse() {
        let data = { password: formData.get("pw").toString(), number: formData.get("number").toString() };
        let query = new URLSearchParams(data);
        let url = "https://gis-example.herokuapp.com"; //da wird die url gesetzt
        url = url + "?" + query.toString();
        let response = await fetch(url); //speichern die response die wir bekommen
        console.log(await response.text()); // wandelt in einem text um
    }
})(AufgabeC || (AufgabeC = {}));
//# sourceMappingURL=script.js.map