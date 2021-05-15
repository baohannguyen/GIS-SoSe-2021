namespace Aufgabe2 {
    interface Sushi {
        selection: Selection;
        filling: Filling;
        extras: Extras;
    }
    interface Selection {
        type: string;
        typePicture: string;
        numberOfPieces: number;
        price: number;
    }
    interface Filling {
        type: string;
        typePicture: string;
        price: number;
    }
    interface Extras {
        extra1: string;
        extra2: string;
        extra3: string;
        price: number;
    }

    let dataStorage: Sushi = null;
    function daten(): void {
        dataStorage = JSON.parse(dataJSON); // JSON-Format wird in ein TypeScript-Objekt konvertiert
    }
    daten();

    let allSelection: Selection[] = [];
    let allFilling: Filling[] = [];
    let allExtras: Extras[] = [];
    seeData();
    function seeData(): void {
        for (let i: number = 0; i < data.length; i++) {
            let attributeStorage: string[] = data[i].split("+");
            switch (attributeStorage[0]) {
                case "Selection":
                    allSelection[allSelection.length] = { type: attributeStorage[1], typePicture: attributeStorage[2], price: Number(attributeStorage[3]), numberOfPieces: Number(attributeStorage[4]) };
                    break;
            }
        }
        for (let i: number = 0; i < data.length; i++) {
            let attributeStorage: string[] = data[i].split("+");
            switch (attributeStorage[0]) {
                case "Filling":
                    allFilling[allFilling.length] = { type: attributeStorage[1], typePicture: attributeStorage[2], price: Number(attributeStorage[3]) };
                    break;
            }
        }
        for (let i: number = 0; i < data.length; i++) {
            let attributeStorage: string[] = data[i].split("+");
            switch (attributeStorage[0]) {
                case "Extras":
                    allExtras[allExtras.length] = { extra1: attributeStorage[1], extra2: attributeStorage[2], extra3: attributeStorage[3], price: Number(attributeStorage[4]) };
            }
            seeVar();
            break;
            function seeVar(): void {
                for (let i: number = 0; i < allSelection.length; i++) {
                    let container: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                    container.setAttribute("class", "containerSelection");
                    document.querySelector("main").appendChild(container);
                    let image: HTMLImageElement = <HTMLImageElement>document.createElement("img");
                    image.setAttribute("src", allSelection[i].typePicture);
                    container.appendChild(image);
                    let list: HTMLUListElement = <HTMLUListElement>document.createElement("ul");
                    container.appendChild(list);
                    let listelement: HTMLLIElement = <HTMLLIElement>document.createElement("li");
                    listelement.appendChild(document.createTextNode(allSelection[i].type));
                    let listelement2: HTMLLIElement = <HTMLLIElement>document.createElement("li");
                    listelement2.appendChild(document.createTextNode("Preis: " + allSelection[i].price));
                    let listelement3: HTMLLIElement = <HTMLLIElement>document.createElement("li");
                    listelement3.appendChild(document.createTextNode("Stückzahl: " + allSelection[i].numberOfPieces));
                    container.appendChild(list);
                    list.appendChild(listelement);
                    list.appendChild(listelement2);
                    list.appendChild(listelement3);
                    let button: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
                    button.setAttribute("id", "button" + allSelection[i].type);
                    button.appendChild(document.createTextNode(allSelection[i].type + " auswählen"));
                    button.addEventListener("click", electTypeOne);
                    container.appendChild(button);
                }
                for (let i: number = 0; i < allFilling.length; i++) {
                    let ctn: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                    ctn.setAttribute("class", "containerFilling");
                    document.querySelector("main").appendChild(ctn);
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
                    ctn.appendChild(button);
                }

                function electTypeOne(_event: Event): void {
                    let button: HTMLButtonElement = <HTMLButtonElement>_event.target;
                    switch (button.id) {
                        case "buttonHoso-Maki":
                            console.log("Sie haben sich für Hoso-Maki entschieden");
                            break;
                        case "buttonNigiri":
                            console.log("Sie haben sich für Nigiri entschieden");
                            break;
                        case "buttonTemaki":
                            console.log("Sie haben sich für Temaki entschieden");
                            break;
                    }
                }
            } 
        }
        function storage(): void {
            localStorage.setItem("Auswahl", "Hoso-Maki");
            console.log(localStorage.getItem("Auswahl"));
            localStorage.setItem("Auswahl", "Nigiri");
            console.log(localStorage.getItem("Auswahl"));
            localStorage.setItem("Auswahl", "Temaki");
            console.log(localStorage.getItem("Auswahl"));
        }
        storage();

        let fillingSite: Filling[] = undefined;
        
        let actualSite: string = undefined;

        if (document.URL.includes("index2")) { // damit wird abgefragt ob die jetzige seite die index2.html Seite ist
            let selectionSite: Selection[] = undefined;
            selectionSite = allSelection;
            actualSite = dataStorage.selection.toString();
        } else if (document.URL.includes("filling")) {
            fillingSite = allFilling;
            actualSite = dataStorage.filling.toString();
        }

    }
}
