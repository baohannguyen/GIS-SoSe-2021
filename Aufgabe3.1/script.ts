namespace AufgabeC {
    interface Data {
        password: string;
        number: string;
    }
    let formData: FormData = new FormData(document.forms[0]); //gibt das formdata objekt aus

    document.getElementById("sendButton").addEventListener("click", getResponse);

    async function getResponse(): Promise <void> {
        let data: Data = { password: formData.get("pw").toString(), number: formData.get("number").toString()};
        let query: URLSearchParams = new URLSearchParams(<any>data);
        let url: string = "https://gis-example.herokuapp.com"; //da wird die url gesetzt
        url = url + "?" + query.toString();
        let response: Response = await fetch(url); //speichern die response die wir bekommen
        console.log(await response.text()); // wandelt in einem text um
        
    }




}