namespace Aufgabe3_4 {
    interface Student {
        name: string;
        birthday: string;
        email: string;
    }
    let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendData");
    let requestButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("requestData");

    sendButton.addEventListener("click", addStudent);
    requestButton.addEventListener("click", getData);

    async function addStudent(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let profil: Student = { name: formData.get("name").toString(), birthday: formData.get("birthday").toString(), email: formData.get("email").toString()};
        let url: string = "http://localhost:8100/insert"; //https ist verschlüsselt und somit sicherer
        let query: URLSearchParams = new URLSearchParams(<any>profil);
        url = url + "?" + query.toString();
        await fetch(url); // schickt die Anfrage an den Server
        let form: HTMLFormElement = <HTMLFormElement>document.getElementById("profil"); //form element wird gespeichert
        form.reset(); //Inhalte werden zurückgesetzt
    }

    async function getData(): Promise<void> {
        let output: HTMLDivElement = <HTMLDivElement>document.getElementById("answer");
        let url: string = "http://localhost:8100/get";
        let response: Response = await fetch (url);
        let dataString: string = await response.text();
        output.innerText = dataString;
    }

//Mit Melanie Müller zusammengearbeitet
}