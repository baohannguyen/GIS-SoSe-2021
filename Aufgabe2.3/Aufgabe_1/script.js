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
    // div.style.height = (Math.random() * 80).toString() + "px";
    div.style.height = "100px";
    div.style.width = "200px";
    div.style.backgroundColor = "black";
    div.style.position = "relative";
    body.appendChild(div);
    let button = document.createElement("button");
    // document.getElementById("test");
    button.style.color = "black";
    button.appendChild(document.createTextNode("Hello World"));
    body.appendChild(button);
    // document.getElementById("test").appendChild(button);
    let p = document.createElement("p");
    body.appendChild(p);
    p.setAttribute("id", "test");
    // document.getElementById("test").addEventListener("click", handleButton);
    function handleButton() {
        document.getElementById("test").appendChild(document.createTextNode("Testen ob es klappt "));
    }
    document.addEventListener("click", handleButton);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map