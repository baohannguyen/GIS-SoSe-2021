function a1(): void {
    let h: string = "Alles";
    console.log(h);
    func1();
    console.log("Logo!");
}

a1(); // Dadurch wird die Funktion aufgerufen

function func1(): void {
    console.log("Klar?");
}
// Aufgabe 1
// a) "Alles" "Klar?" "Logo!" wird in dieser Reihenfolge in der Konsole ausgegeben
// Beide Funktionen haben keinen Rückgabewerte, deswegen sind sie zulässig

//c)
function a3(): void {
    let h: string = "Alles Gute!";
    console.log(h);
    func2();
    console.log("Alles Logo!");
}

a3();

function func2(): void {
    console.log("Alles klar?");
}

//Aufgabe 2
function a2(): void {
    let i: number = 9;

    do {
        console.log(i); 
        i = i - 1; // da wird die aktuelle Zahl um eins verringert
    } while ( i > 0); // die neue Zahl muss größer als 0 sein
}

a2();
// Die Zahl 9 wird nach jedem Aufruf um die Zahl 1 veringert bis die Endzahl genauso groß ist wie 0 und danach wird die Funktion a2() aufgerufen
// Ausgabe: 9 8 7 6 5 4 3 2 1

//Aufgabe 3 Fehlerfindung für Melanie
//Code von A1
// function b1(): void {
//     let i: string = "Alles";
//     console.log(j);
//     fun1();
//     console.log("Logo!");
// }

// b1();

// function fun1(): void {
//     console.log("Klar?");
// }

// //Code von A2
// function b2(): void {
//     let i: number = 9;

//     do {
//         console.log(i);
//         i = i - 1;
//     } while ( i > 0):
// }

// b2();