namespace Aufgabe2 {
    interface Sushi {
        selection: Option[];
        filling: Option[];
        extras: Option[];
    }
    interface Option {
        type: string;
        typePicture: string;
        price: number;
    }

    let dataStorage: Sushi;
    // function changeData(): void {
    //     dataStorage2 = JSON.parse(dataJSON); // JSON-Format wird in ein TypeScript-Objekt konvertiert

    // }
    // changeData();
   

async function communicate(_url: RequestInfo): Promise<void> {

    }
    




    let allSelection: Option[] = dataStorage.selection;
    let allFilling: Option[] = dataStorage.filling;
    let allExtras: Option[] = dataStorage.extras;

    function seeSelection(): void {
        for (let i: number = 0; i < allSelection.length; i++) {
            let container: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            container.setAttribute("class", "containerSelection");
            document.querySelector("#choices").appendChild(container);
            let image: HTMLImageElement = <HTMLImageElement>document.createElement("img");
            image.setAttribute("src", allSelection[i].typePicture);
            container.appendChild(image);
            let list: HTMLUListElement = <HTMLUListElement>document.createElement("ul");
            container.appendChild(list);
            let listelement: HTMLLIElement = <HTMLLIElement>document.createElement("li");
            listelement.appendChild(document.createTextNode(allSelection[i].type));
            let listelement2: HTMLLIElement = <HTMLLIElement>document.createElement("li");
            listelement2.appendChild(document.createTextNode("Preis: " + allSelection[i].price));
            container.appendChild(list);
            list.appendChild(listelement);
            list.appendChild(listelement2);
            let button: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
            button.setAttribute("id", "button" + allSelection[i].type);
            button.appendChild(document.createTextNode(allSelection[i].type + " auswählen"));
            button.addEventListener("click", electType);
            container.appendChild(button);
        }
    }
    function seeFilling(): void {

        for (let i: number = 0; i < allFilling.length; i++) {
            let ctn: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            ctn.setAttribute("class", "containerFilling");
            document.querySelector("#choices").appendChild(ctn);
            let image: HTMLImageElement = <HTMLImageElement>document.createElement("img");
            image.setAttribute("src", allFilling[i].typePicture);
            ctn.appendChild(image);
            let list: HTMLUListElement = <HTMLUListElement>document.createElement("ul");
            ctn.appendChild(list);
            let listelement: HTMLLIElement = <HTMLLIElement>document.createElement("li");
            listelement.appendChild(document.createTextNode(allFilling[i].type));
            let listelement2: HTMLLIElement = <HTMLLIElement>document.createElement("li");
            listelement2.appendChild(document.createTextNode("Preis: " + allFilling[i].price));
            ctn.appendChild(list);
            list.appendChild(listelement);
            list.appendChild(listelement2);
            let button: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
            button.setAttribute("id", "button" + allFilling[i].type);
            button.appendChild(document.createTextNode(allFilling[i].type + " auswählen"));
            button.addEventListener("click", electType);
            ctn.appendChild(button);
        }
        let img: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        let optionOne: Option = JSON.parse(localStorage.getItem("Auswahl"));
        img.setAttribute("src", optionOne.typePicture);
        document.getElementById("selection").appendChild(img);
    }


    function seeExtras(): void {
        for (let i: number = 0; i < allExtras.length; i++) {
            let cont: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            cont.setAttribute("class", "containerExtras");
            document.querySelector("#choices").appendChild(cont);
            let image: HTMLImageElement = <HTMLImageElement>document.createElement("img");
            image.setAttribute("src", allExtras[i].typePicture);
            cont.appendChild(image);
            let list: HTMLUListElement = <HTMLUListElement>document.createElement("ul");
            cont.appendChild(list);
            let listelement: HTMLLIElement = <HTMLLIElement>document.createElement("li");
            listelement.appendChild(document.createTextNode(allExtras[i].type));
            let listelement2: HTMLLIElement = <HTMLLIElement>document.createElement("li");
            listelement2.appendChild(document.createTextNode("Preis: " + allExtras[i].price));
            cont.appendChild(list);
            list.appendChild(listelement);
            list.appendChild(listelement2);
            let button: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
            button.setAttribute("id", "button" + allExtras[i].type);
            button.appendChild(document.createTextNode(allExtras[i].type + " auswählen"));
            button.addEventListener("click", electType);
            cont.appendChild(button);
        }
        let img: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        let optionOne: Option = JSON.parse(localStorage.getItem("Auswahl"));
        img.setAttribute("src", optionOne.typePicture);
        document.getElementById("selection").appendChild(img);
        let imgFilling: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        let optionTwo: Option = JSON.parse(localStorage.getItem("Füllung"));
        imgFilling.setAttribute("src", optionTwo.typePicture);
        document.getElementById("selection").appendChild(imgFilling);
    }

    function electType(_event: Event): void {
        let button: HTMLButtonElement = <HTMLButtonElement>_event.target;
        switch (button.id) {
            case "buttonHoso-Maki":
                localStorage.setItem("Auswahl", JSON.stringify(dataStorage.selection[0]));
                console.log("Sie haben sich für Hoso-Maki entschieden");
                window.location.href = "filling.html";
                break;
            case "buttonNigiri":
                localStorage.setItem("Auswahl", JSON.stringify(dataStorage.selection[1]));
                console.log("Sie haben sich für Nigiri entschieden");
                window.location.href = "filling.html";
                break;
            case "buttonTemaki":
                localStorage.setItem("Auswahl", JSON.stringify(dataStorage.selection[2]));
                console.log("Sie haben sich für Temaki entschieden");
                window.location.href = "filling.html";
                break;
            case "buttonLachs":
                localStorage.setItem("Füllung", JSON.stringify(dataStorage.filling[0]));
                console.log("Sie haben sich für Lachs entschieden");
                window.location.href = "extras.html";
                break;
            case "buttonAvocado":
                localStorage.setItem("Füllung", JSON.stringify(dataStorage.filling[1]));
                console.log("Sie haben sich für Avocado entschieden");
                window.location.href = "extras.html";
                break;
            case "buttonThunfisch":
                localStorage.setItem("Füllung", JSON.stringify(dataStorage.filling[2]));
                console.log("Sie haben sich für Thunfisch entschieden");
                window.location.href = "extras.html";
                break;
            case "buttonVegan":
                localStorage.setItem("Extras", JSON.stringify(dataStorage.extras[0]));
                console.log("Sie haben sich für Vegan entschieden");
                window.location.href = "result.html";
                break;
            case "buttonScharf":
                localStorage.setItem("Extras", JSON.stringify(dataStorage.extras[1]));
                console.log("Sie haben sich für Scharf entschieden");
                window.location.href = "result.html";
                break;
            case "buttonFrittiert":
                localStorage.setItem("Extras", JSON.stringify(dataStorage.extras[2]));
                console.log("Sie haben sich für Frittiert entschieden");
                window.location.href = "result.html";
                break;
        }
    }
    function seeResult(): void {
        let img: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        let optionOne: Option = JSON.parse(localStorage.getItem("Auswahl"));
        img.setAttribute("src", optionOne.typePicture);
        document.querySelector("main").appendChild(img);
        let imgFilling: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        let optionTwo: Option = JSON.parse(localStorage.getItem("Füllung"));
        imgFilling.setAttribute("src", optionTwo.typePicture);
        document.querySelector("main").appendChild(imgFilling);
        let imgExtras: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        let optionThree: Option = JSON.parse(localStorage.getItem("Extras"));
        imgExtras.setAttribute("src", optionThree.typePicture);
        document.querySelector("main").appendChild(imgExtras);
    }


    function site(): void {

        if (document.URL.includes("index2")) { //da wird abgefragt ob die jetzige Seite die index2.html ist 
            seeSelection();
        }
        else if (document.URL.includes("filling")) {
            seeFilling();
        }
        else if (document.URL.includes("extras")) {
            seeExtras();
        }
        else {
            seeResult();
        }
    }
    site();
}



