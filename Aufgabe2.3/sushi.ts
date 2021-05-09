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
        price: string;
    }
    interface Extras {
        extra1: string;
        extra2: string;
        extra3: string;
        price: number;
    }

    let allSelection: Selection[] = [];
    seeData();
    function seeData(): void {
        for (let i: number = 0; i < data.length; i++) {
            let attributeStorage: string [] = data[i].split("+");
            switch (attributeStorage[0]) {
                case "Selection":
                    allSelection[allSelection.length] = {type: attributeStorage[1] , typePicture: attributeStorage[2] , price: Number(attributeStorage[3])  , numberOfPieces: Number(attributeStorage[4])};
                    break; // für Filling und Extras das selbe machen, wenn man die anderen Seiten auch sehen möchte 
            }
        }

    }
    function seeVar(): void {
        for (let i: number = 0; i < allSelection.length; i++) {
            let container: HTMLDivElement = <HTMLDivElement> document.createElement("div");
            container.setAttribute("class", "containerSelection");
            document.querySelector("main").appendChild(container);
            let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.createElement("canvas");
            canvas.setAttribute("style", "width:250px; height:200px");
            canvas.setAttribute("id", "canvas" + i);
            container.appendChild(canvas);
            let list: HTMLUListElement = <HTMLUListElement> document.createElement("ul");
            container.appendChild(list);
            let listelement: HTMLLIElement = <HTMLLIElement> document.createElement("li");
            listelement.appendChild(document.createTextNode(allSelection[i].type));
            let listelement2: HTMLLIElement = <HTMLLIElement> document.createElement("li");
            listelement2.appendChild(document.createTextNode("Preis: " + allSelection[i].price));
            container.appendChild(list);
            list.appendChild(listelement);
            list.appendChild(listelement2);
        }
    }
    seeVar();

    function electTypeOne(): void {
        console.log("Sie haben sich für Hoso-Maki entschieden");
    }
    document.querySelector("button").addEventListener("click", electTypeOne);

    function electTypeTwo(): void {
        console.log("Sie haben sich für Nigiri entschieden");
    }
    document.querySelector("#typeTwo").addEventListener("click", electTypeTwo);

    function electTypeThree(): void {
        console.log("Sie haben sich für Temaki entschieden");
    }
    document.querySelector("#typeThree").addEventListener("click", electTypeThree);
}