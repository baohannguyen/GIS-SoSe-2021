namespace Aufgabe3_1 {
    interface Data {
        firstName: string;
        lastName: string;
        birthday: string;
        password: string;
        email: string;
    }


    document.getElementById("sendButton").addEventListener("click", getResponse);

    async function getResponse(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); //gibt das formData objekt aus;
        let login: Data = { firstName: formData.get("firstName").toString(), lastName: formData.get("lastName").toString(), birthday: formData.get("birthday").toString(), 
        password: formData.get("pw").toString(), email: formData.get("email").toString() }; //values von den daten wurden in das Objekt login gespeichert
        let query: URLSearchParams = new URLSearchParams(<any>login); //neue query aus unserem Objekt wurde erstellt 
        let url: string = "https://banhbao.herokuapp.com"; //da wird die URL gesetzt
        url = url + "?" + query.toString(); //query der URL hinzugefügt; ? = symbol für eine query
        let response: Response = await fetch(url); //speichert die Response/Antwort die wir bekommen
        console.log(await response.text()); // wandelt in einem text um
    }

}//Mit Melanie Müller zusammengearbeitet
