"use strict";
let canvas = document.getElementById("firstCanvas");
let context = canvas.getContext("2d");
//Border
// context.moveTo(500, 0);
// context.lineTo(500, 400);
// context.moveTo (0, 400);
// context.lineTo(0, 500);
// context.stroke();
//sky
context.fillStyle = "royalblue";
context.fillRect(0, 0, 500, 260);
context.fill();
context.beginPath();
context.strokeStyle = "white";
context.fillStyle = "white";
context.strokeRect(75, 140, 150, 110); // Wand
// context.fillRect(130, 190, 40, 60); // Tür
// context.beginPath();
// context.moveTo(50, 140); //Dach
// context.lineTo(150, 60);
// context.lineTo(250, 140);
context.closePath();
context.stroke();
context.fill();
//# sourceMappingURL=script.js.map