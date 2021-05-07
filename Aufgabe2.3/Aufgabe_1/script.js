"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    let body = document.body;
    let h1 = document.createElement("h1");
    h1.style.color = "royalblue";
    h1.style.fontFamily = "sans-serif";
    h1.appendChild(document.createTextNode("Aufgabe 1"));
    body.appendChild(h1);
    let button = document.createElement("button");
    button.style.color = "black";
    button.appendChild(document.createTextNode("Rechtecke"));
    body.appendChild(button);
    // document.getElementById("test").appendChild(button);
    let buttonTwo = document.createElement("button");
    buttonTwo.style.color = "black";
    buttonTwo.appendChild(document.createTextNode("Zurücksetzen"));
    body.appendChild(buttonTwo);
    let p = document.createElement("p");
    body.appendChild(p);
    p.setAttribute("id", "test");
    let p1 = document.createElement("p");
    body.appendChild(p1);
    p1.setAttribute("id", "test2");
    // document.getElementById("test").addEventListener("click", handleButton);
    let div = document.createElement("div");
    div.style.height = (Math.random() * 200).toString() + "px";
    div.style.width = (Math.random() * 200).toString() + "px";
    div.style.position = "absolute";
    div.style.top = (Math.random() * 300).toString() + "px";
    div.style.left = (Math.random() * 300).toString() + "px";
    div.style.backgroundColor = "black";
    function handleButton() {
        document.getElementById("test").appendChild(div);
        body.appendChild(div);
        // document.getElementById("test2").appendChild();
    }
    document.addEventListener("click", handleButton);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map