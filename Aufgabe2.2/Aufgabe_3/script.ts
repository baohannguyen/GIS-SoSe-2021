let canvas: HTMLCanvasElement = <HTMLCanvasElement>
document.getElementById("firstCanvas");

let context: CanvasRenderingContext2D = canvas.getContext("2d");
context.lineWidth = 10;
context.strokeRect(75, 140, 150, 110);
context.fillRect(130, 190, 40, 60);