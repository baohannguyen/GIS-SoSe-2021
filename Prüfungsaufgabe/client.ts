namespace Prüfungsaufgabe {
    interface Pictures {
        link: string;
    }
    let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insertPicture");

    insertButton.addEventListener("click", addPicture);

    async function addPicture(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); //gibt das formData Objekt aus
        let bilder: Pictures = { link: formData.get("newPicture").toString()}; //Werte von den Interface wurde in das Objekt gespeichert
        let query: URLSearchParams = new URLSearchParams(<any>bilder);
        let url: string = "https://banhbao.herokuapp.com/insertURL"; //URL wird hier gesetzt
        url = url + "?" + query.toString();
        await fetch(url);

    }
    async function getPictures(): Promise<void> {
        let url: string = "https://banhbao.herokuapp.com/getPicture";
        let response: Response = await fetch(url); //speichert die Antwort
        console.log(await response.text());
    }
    getPictures();   
    }

