namespace Aufgabe1 {
    let body: HTMLElement = document.body;
    let h1: HTMLElement = document.createElement("h1");
    h1.style.color = "royalblue";
    h1.style.fontFamily = "sans-serif";
    h1.appendChild(document.createTextNode("Aufgabe 1"));
    body.appendChild(h1);

    let buttonRect: HTMLButtonElement = document.createElement("button");
    buttonRect.style.color = "black";
    buttonRect.appendChild(document.createTextNode("Rectangle"));
    body.appendChild(buttonRect);
    buttonRect.setAttribute("id", "showRect");
  
    let buttonRemove: HTMLButtonElement = document.createElement("button");
    buttonRemove.style.color = "black";
    buttonRemove.appendChild(document.createTextNode("Reset"));
    body.appendChild(buttonRemove);
    buttonRemove.setAttribute("id", "deleteRect");

    let divArr: HTMLDivElement[] = []; 

    function handleButton(): void {
        let div: HTMLDivElement = document.createElement("div");
        div.style.height = (Math.random() * 200).toString() + "px";
        div.style.width = (Math.random() * 200).toString() + "px";
        div.style.position = "absolute";
        div.style.top = (Math.random() * 300).toString() + "px";
        div.style.left = (Math.random() * 300).toString() + "px";
        div.style.backgroundColor = "black";
        div.style.zIndex = "-1"; // sorgt dafür,dass meine divs im Hintergrund sind
        console.log(div);
        divArr[divArr.length] = div; //damit kriege ich die jetzige Position von dem Array raus
        document.getElementById("showRect").appendChild(div);
        buttonRect.appendChild(div);
    }
    document.querySelector("#showRect").addEventListener("click", handleButton);
    
    function removeRect(): void {
       for (let i: number = divArr.length - 1; i >= 0; i--) {
        document.getElementById("showRect").removeChild(divArr[i]);
        divArr.pop();
       }
    }
    document.querySelector("#deleteRect").addEventListener("click", removeRect);
}


