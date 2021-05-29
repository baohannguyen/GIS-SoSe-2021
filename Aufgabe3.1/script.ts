namespace Aufgabe3_1 {
    interface Data {
        firstName: string;
        lastName: string;
        birthday: string;
        password: string;
        email: string;
    }

    document.getElementById("sendButton").addEventListener("click", getAnswer);

    async function getAnswer(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); //gibt das formData objekt aus;
        let login: Data = { firstName: formData.get("firstName").toString(), lastName: formData.get("lastName").toString(), birthday: formData.get("birthday").toString(), 
        password: formData.get("pw").toString(), email: formData.get("email").toString() }; //values von den Daten wurden in das Objekt login gespeichert
        let query: URLSearchParams = new URLSearchParams(<any>login); //eine neue query aus unserem Objekt wurde erstellt 
        let url: string = "https://banhbao.herokuapp.com"; //da wird die URL gesetzt
        url = url + "?" + query.toString(); //query wurde der URL hinzugefügt; ? = Symbol für eine query; ? erscheint vor dem String/ der Zeichenkette in der URL
        let answer: Response = await fetch(url); //speichert die Antwort die wir bekommen
        console.log(await answer.text()); // wandelt in einem Text um
    }

}//Mit Melanie Müller zusammengearbeitet
