let canvas: HTMLCanvasElement = <HTMLCanvasElement>
document.getElementById("firstCanvas");

let context: CanvasRenderingContext2D = canvas.getContext("2d");

context.moveTo(0, 0);
context.lineTo(200, 100);
context.stroke();

