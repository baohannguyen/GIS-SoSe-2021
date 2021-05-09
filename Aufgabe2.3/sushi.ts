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

    let canvas: HTMLCanvasElement = <HTMLCanvasElement>
        document.getElementById("hosomaki");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");
    context.lineWidth = 3;

    context.beginPath();
    context.strokeStyle = "black";
    context.moveTo(0, 0);
    context.lineTo(0, 200);
    context.lineTo(250, 200);
    context.lineTo(250, 0);
    context.closePath();
    context.stroke();

    let cvs: HTMLCanvasElement = <HTMLCanvasElement>
        document.getElementById("nigiri");
    let ctx: CanvasRenderingContext2D = cvs.getContext("2d");
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 200);
    ctx.lineTo(250, 200);
    ctx.lineTo(250, 0);
    ctx.closePath();
    ctx.stroke();

    let canv: HTMLCanvasElement = <HTMLCanvasElement>
        document.getElementById("temaki");
    let cont: CanvasRenderingContext2D = canv.getContext("2d");

    cont.lineWidth = 3;

    cont.beginPath();
    cont.strokeStyle = "black";
    cont.moveTo(0, 0);
    cont.lineTo(0, 200);
    cont.lineTo(250, 200);
    cont.lineTo(250, 0);
    cont.closePath();
    cont.stroke();

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