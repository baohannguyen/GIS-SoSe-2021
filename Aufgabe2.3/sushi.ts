namespace Aufgab2 {
    interface Sushi {
        selection: Selection;
        filling: Filling;
        extras: Extras;
    }
    interface Selection {
        type: string;
        typePicture: string;
        numberOfPiecees: number;
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
    context.lineTo(300, 200);
    context.lineTo(300, 0);
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
    ctx.lineTo(300, 200);
    ctx.lineTo(300, 0);
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
    cont.lineTo(300, 200);
    cont.lineTo(300, 0);
    cont.closePath();
    cont.stroke();

}