"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    let body = document.body;
    let h1 = document.createElement("h1");
    h1.style.color = "royalblue";
    h1.style.fontFamily = "sans-serif";
    h1.appendChild(document.createTextNode("Aufgabe 1"));
    body.appendChild(h1);
    let div = document.createElement("div");
    // div.style.height = (Math.random() * 100).toString() + "px";
    div.style.height = "100px";
    div.style.width = "200px";
    div.style.backgroundColor = "black";
    div.style.position = "relative";
    // div.classList.add("rectangle");
    body.appendChild(div);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map