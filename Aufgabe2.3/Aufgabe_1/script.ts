namespace Aufgabe2_3 {
    //Aufgabe 1
    let body: HTMLElement = document.body;
    let h1: HTMLElement = document.createElement("h1");
    h1.style.color = "royalblue";
    h1.style.fontFamily = "sans-serif";
    h1.appendChild(document.createTextNode("Aufgabe 1"));
    body.appendChild(h1);


    let button: HTMLButtonElement = document.createElement("button");
    button.style.color = "black";
    button.appendChild(document.createTextNode("Rectangle"));
    body.appendChild(button);
    // document.getElementById("test").appendChild(button);
    let buttonTwo: HTMLButtonElement = document.createElement("button");
    buttonTwo.style.color = "black";
    buttonTwo.appendChild(document.createTextNode("Reset"));
    body.appendChild(buttonTwo);

    let p: HTMLParagraphElement = document.createElement("p");
    body.appendChild(p);
    p.setAttribute("id", "showRect");

    let p1: HTMLParagraphElement = document.createElement("p");
    body.appendChild(p1);
    p1.setAttribute("id", "deleteRect");


    // document.getElementById("test").addEventListener("click", handleButton);


    let div: HTMLDivElement = document.createElement("div");
    div.style.height = (Math.random() * 200).toString() + "px";
    div.style.width = (Math.random() * 200).toString() + "px";
    div.style.position = "absolute";
    div.style.top = (Math.random() * 300).toString() + "px";
    div.style.left = (Math.random() * 300).toString() + "px";
    div.style.backgroundColor = "black";


    function removeButton(): void {
        let removeRect: HTMLElement = document.querySelector("div");
        removeRect.remove();
    }
    document.addEventListener("click", removeButton);
    
    function handleButton(): void {
        document.getElementById("showRect").appendChild(div);
        button.appendChild(div);
        // body.appendChild(div);
        // document.getElementById("test2").appendChild();
    }
    document.addEventListener("click", handleButton);

    //Aufgabe 2
    interface Cat {
        race: string;
        color: string;
        homecountry: string;
    }
    let cat1: Cat = { race: "Europäisch Kurzhaar", color: "schwarz", homecountry: "USA"};
}
    
    
    
    