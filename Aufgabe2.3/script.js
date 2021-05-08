"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    //Aufgabe 1
    let body = document.body;
    let h1 = document.createElement("h1");
    h1.style.color = "royalblue";
    h1.style.fontFamily = "sans-serif";
    h1.appendChild(document.createTextNode("Aufgabe 1"));
    body.appendChild(h1);
    let button = document.createElement("button");
    button.style.color = "black";
    button.appendChild(document.createTextNode("Rectangle"));
    body.appendChild(button);
    button.setAttribute("id", "showRect");
    // document.getElementById("test").appendChild(button);
    let buttonTwo = document.createElement("button");
    buttonTwo.style.color = "black";
    buttonTwo.appendChild(document.createTextNode("Reset"));
    body.appendChild(buttonTwo);
    buttonTwo.setAttribute("id", "deleteRect");
    let divArr = [];
    function handleButton() {
        let div = document.createElement("div");
        div.style.height = (Math.random() * 200).toString() + "px";
        div.style.width = (Math.random() * 200).toString() + "px";
        div.style.position = "absolute";
        div.style.top = (Math.random() * 300).toString() + "px";
        div.style.left = (Math.random() * 300).toString() + "px";
        div.style.backgroundColor = "black";
        div.style.zIndex = "-1"; // sorgt dafür,dass meine divs im Hintergrund sind
        console.log(div);
        divArr[divArr.length] = div; //damit kriege ich die jetzige Position von dem Array
        document.getElementById("showRect").appendChild(div);
        button.appendChild(div);
    }
    document.querySelector("#showRect").addEventListener("click", handleButton);
    function removeRect() {
        for (let i = divArr.length - 1; i >= 0; i--) {
            document.getElementById("showRect").removeChild(divArr[i]);
            divArr.pop();
        }
    }
    document.querySelector("#deleteRect").addEventListener("click", removeRect);
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=script.js.map