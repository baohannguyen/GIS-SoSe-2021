let canvas: HTMLCanvasElement = <HTMLCanvasElement>
document.getElementById("firstCanvas");

let context: CanvasRenderingContext2D = canvas.getContext("2d");
context.lineWidth = 5;

//sky
context.beginPath();
context.fillStyle = "royalblue";
context.fillRect(0, 0, 500, 255);
context.closePath();
context.fill();

//grass
context.beginPath();
context.strokeStyle = "teal";
context.fillStyle = "teal";
context.moveTo(0, 255);
// context.lineTo(0, 460);
// context.lineTo(0, 255);
context.lineTo(500, 255);
context.lineTo(500, 400);
context.lineTo(400, 500);
context.closePath();
context.stroke();
context.fill();


//houses & door
context.beginPath();
context.strokeStyle = "white";
context.fillStyle = "white";
context.fillRect(65, 140, 150, 110);
context.strokeRect(65, 140, 150, 110);
context.fillStyle = "black"; 
context.fillRect(115, 193, 50, 60); // Tür
context.closePath();
context.stroke();
context.fill();

//window
context.beginPath();
context.fillStyle = "black";
context.fillRect(180, 155, 30, 30);
context.closePath();
context.fill();

//roof
context.beginPath();
context.strokeStyle = "black";
context.fillStyle = "black";
context.moveTo(40, 140); //Dach
context.lineTo(140, 60);
context.lineTo(240, 140);
context.closePath();
context.stroke();
context.fill();
