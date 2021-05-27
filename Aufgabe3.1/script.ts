namespace AufgabeC {
    interface Data {
        password: string;
        email: string;
    }
    

    document.getElementById("sendButton").addEventListener("click", getResponse);

    async function getResponse(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); //gibt das formdata objekt aus
        let data: Data = { password: formData.get("pw").toString(), email: formData.get("email").toString() }; //values von email wurden in objekt data gespeichert und das wandel wir in einem string um 
        let query: URLSearchParams = new URLSearchParams(<any>data); //neue query aus unserem objekt wurde erstellt 
        let url: string = "https://gis-example.herokuapp.com"; //da wird die url gesetzt
        url = url + "?" + query.toString(); //query der url hinzugefügt; ? = symbol für eine query
        let response: Response = await fetch(url); //speichert die response die wir bekommen
        console.log(await response.text()); // wandelt in einem text um
        }

    }//Mit Melanie Müller zusammengearbeitet
