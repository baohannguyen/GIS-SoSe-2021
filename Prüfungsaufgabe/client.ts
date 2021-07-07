namespace Memoryaufgabe {
    interface Pictures {
        link: string;
    }
    let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insertPicture");

    insertButton.addEventListener("click", addPicture);

    async function addPicture(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); //gibt das formData Objekt aus
        let pics: Pictures = { link: formData.get("newPicture").toString()}; //Werte von dem Interface wurde in das Objekt gespeichert
        let query: URLSearchParams = new URLSearchParams(<any>pics);
        let url: string = "http://localhost:8100/insertURL"; //URL wird hier gesetzt
        url = url + "?" + query.toString();
        await fetch(url);
        let form: HTMLFormElement = <HTMLFormElement>document.getElementById("memory");
        form.reset();

    }
    async function getPictures(): Promise<void> {
        let output: HTMLDivElement = <HTMLDivElement>document.getElementById("showPic");
        let url: string = "http://localhost:8100/getPicture";
        let response: Response = await fetch(url); //speichert die Antwort
        // console.log(await response.text());
        let dataString: string = await response.json();
        // output.innerHTML = dataString;
        
    }
    getPictures();   
    }