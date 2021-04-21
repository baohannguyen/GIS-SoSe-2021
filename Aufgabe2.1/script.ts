//Aufgabe 1
function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}

// a) "Alles" "Klar?" "Logo!" wird in dieser Reihenfolge der Konsole ausgegeben
// Beide Funktionen haben keinen Rückgabewerte, deswegen sind sie zulässig
//