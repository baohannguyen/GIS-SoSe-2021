let canvas: HTMLCanvasElement = <HTMLCanvasElement>
document.getElementById("firstCanvas");

let context: CanvasRenderingContext2D = canvas.getContext("2d");

// context.font = "40pt Calibri";
// context.fillStyle = "blue";
// context.fillText("Hello World", 150, 100);

context.beginPath();
context.moveTo(100, 150);
context.lineTo(450, 50);
context.strokeRect(75, 140, 150, 110);