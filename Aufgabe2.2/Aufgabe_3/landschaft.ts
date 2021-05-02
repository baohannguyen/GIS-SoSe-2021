let canvas: HTMLCanvasElement = <HTMLCanvasElement>
document.getElementById("landscape");

let context: CanvasRenderingContext2D = canvas.getContext("2d");
context.lineWidth = 5;

//sky
context.beginPath();
context.fillStyle = "royalblue";
context.fillRect(0, 0, 500, 270);
context.closePath();
context.fill();

//grass
context.beginPath();
context.strokeStyle = "teal";
context.fillStyle = "teal";
context.moveTo(0, 270); //Startpunkt
context.lineTo(0, 400); //links unten
context.lineTo(500, 400); // rechts unten
context.lineTo(500, 270); // rechts mittig
context.closePath();
context.stroke();
context.fill();


//houses
context.beginPath();
context.strokeStyle = "white";
context.fillStyle = "white";
context.fillRect(65, 155, 150, 110);
context.strokeRect(65, 155, 150, 110);
//door
context.fillStyle = "black"; 
context.fillRect(115, 208, 50, 60); 
//window
context.fillStyle = "black";
context.fillRect(180, 165, 30, 30);
context.closePath();
context.fill();

//roof
context.beginPath();
context.strokeStyle = "black";
context.fillStyle = "black";
context.moveTo(40, 150); 
context.lineTo(140, 60);
context.lineTo(240, 150);
context.closePath();
context.stroke();
context.fill();

//tree
context.beginPath();
context.fillStyle = "saddlebrown";
context.fillRect (340, 190, 30, 110);
context.strokeStyle = "green";
context.fillStyle = "green";
context.arc(355, 115, 75, 0, 2 * Math.PI);
context.closePath();
context.stroke();
context.fill();

//clouds
context.beginPath();
context.fillStyle = "white";
context.moveTo(50, 50); //Wolke links oben
context.bezierCurveTo(50, 30, 80, 30, 80, 50); // 50 & 30 -> 1. Kontrollpunkt, 80 & 30 -> 2. Kontrollpunkt, 80 & 50 -> Endpunkt
context.moveTo(230, 100); //Wolke mittig
context.bezierCurveTo(230, 80, 260, 80, 260, 100);
context.moveTo(440, 40); //Wolke oben rechts
context.bezierCurveTo(440, 20, 470, 20, 470, 40);
context.closePath();
context.fill();