namespace Aufgabe2_3 {
    let body: HTMLElement = document.body;
    let h1: HTMLElement = document.createElement("h1");
    h1.style.color = "royalblue";
    h1.style.fontFamily = "sans-serif";
    h1.appendChild(document.createTextNode("Aufgabe 1"));
    body.appendChild(h1);

    let div: HTMLDivElement = document.createElement("div");
    // div.style.height = (Math.random() * 80).toString() + "px";
    div.style.height = "100px";
    div.style.width = "200px";
    div.style.backgroundColor = "black";
    div.setAttribute ("position", "absolute");
    body.appendChild(div);
    
    
    let button: HTMLButtonElement = document.createElement("button");
    // document.getElementById("test");
    button.style.color = "black";
    button.appendChild(document.createTextNode("Hello World"));
    body.appendChild(button);
    // document.getElementById("test").appendChild(button);
    
    let p: HTMLParagraphElement = document.createElement("p");
    body.appendChild(p);
    p.setAttribute("id", "test");
    
    // document.getElementById("test").addEventListener("click", handleButton);


    function handleButton(): void {
        document.getElementById("test").appendChild(document.createTextNode("Testen ob es klappt "));
    }
    document.addEventListener("click", handleButton);



}
