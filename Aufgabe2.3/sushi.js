"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    let canvas = document.getElementById("hosomaki");
    let context = canvas.getContext("2d");
    context.lineWidth = 3;
    context.beginPath();
    context.strokeStyle = "black";
    context.moveTo(0, 0);
    context.lineTo(0, 200);
    context.lineTo(250, 200);
    context.lineTo(250, 0);
    context.closePath();
    context.stroke();
    let cvs = document.getElementById("nigiri");
    let ctx = cvs.getContext("2d");
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 200);
    ctx.lineTo(250, 200);
    ctx.lineTo(250, 0);
    ctx.closePath();
    ctx.stroke();
    let canv = document.getElementById("temaki");
    let cont = canv.getContext("2d");
    cont.lineWidth = 3;
    cont.beginPath();
    cont.strokeStyle = "black";
    cont.moveTo(0, 0);
    cont.lineTo(0, 200);
    cont.lineTo(250, 200);
    cont.lineTo(250, 0);
    cont.closePath();
    cont.stroke();
    let allSelection = [];
    seeData();
    function seeData() {
        for (let i = 0; i < Aufgabe2.data.length; i++) {
            let attributeStorage = Aufgabe2.data[i].split("+");
            switch (attributeStorage[0]) {
                case "Selection":
                    allSelection[allSelection.length] = { type: attributeStorage[1], typePicture: attributeStorage[2], price: Number(attributeStorage[3]), numberOfPieces: Number(attributeStorage[4]) };
                    break; // für Filling und Extras das selbe machen, wenn man die anderen Seiten auch sehen möchte 
            }
        }
    }
    function seeVar() {
        for (let i = 0; i < allSelection.length; i++) {
            let container = document.createElement("div");
            container.setAttribute("class", "containerSelection");
            document.querySelector("main").appendChild(container);
            let canvas = document.createElement("canvas");
            canvas.setAttribute("style", "width:250px; height:200px");
            canvas.setAttribute("id", "canvas" + i);
            container.appendChild(canvas);
        }
    }
    seeVar();
    function electTypeOne() {
        console.log("Sie haben sich für Hoso-Maki entschieden");
    }
    document.querySelector("button").addEventListener("click", electTypeOne);
    function electTypeTwo() {
        console.log("Sie haben sich für Nigiri entschieden");
    }
    document.querySelector("#typeTwo").addEventListener("click", electTypeTwo);
    function electTypeThree() {
        console.log("Sie haben sich für Temaki entschieden");
    }
    document.querySelector("#typeThree").addEventListener("click", electTypeThree);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=sushi.js.map