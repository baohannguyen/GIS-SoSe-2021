function a1(): void {
    let h: string = "Alles";
    console.log(h);
    funct1();
    console.log("Logo!");
}

a1(); // Dadurch wird die Funktion aufgerufen

function funct1(): void {
    console.log("Klar?");
}
// Aufgabe 1
// a) "Alles" "Klar?" "Logo!" wird in dieser Reihenfolge in der Konsole ausgegeben
// In dem Code sind alle Variablenamen zulässig, weil Buchstaben von a-z und A-Z, Ziffern von 0-9, der Unterstrich und das Dollar-Zeichen für Variablenamen erlaubt sind
// Was nicht erlaubt ist, dass der Name mit einer Ziffer beginnt oder man Bindestriche, Leerzeichen und Schlüsselwörter benutzt 

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

// Fehlerfindung für mich (von Melanie)
// function a1(): void {
//     let a: string = "Alles"; 
//     console.log(a);
//     funktion1();                     Fehler: funktion1() wird nicht genutzt oder ist nicht deklariert
//     console.log("Logo!"); 
// }

// a1();

// function funktion2(): void {
//     console.log("Klar?");
// }

// a2();

// function funktion2(): void {
//     console.log("Alles Klar?");
// }

// function a2(): number {              Fehler: Da musst void stehen anstatt number
//     let i: number = 9;


//     do {
//         console.log(i);
//         i = i - 1;
//     } while ( i > 0);
// }

// a2(); 
// Dadurch, dass bewusst Fehler vorkommen, hab ich den ganzen Code auskommentiert, damit sie die anderen Codes nicht beeinflussen


//Aufgabe 4  (x und func2 vom Original-Code hab ich umbenannt, damit keine Fehlermeldung zur doppelten Funktionsimplementierung vorkommt)
let m: string = "Hallo";
console.log(m);
func1(m);
console.log(m);
funct2();
func3();
console.log(m);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function funct2(): void {
    let m: string = "Blubb";
    console.log(m);
}

function func3(): void {
    m = "Test";
}
// a) Unsere Annahme: "Hallo" "Hallo" "Blubb" "Hallo"
// Die Ausgabe: "Hallo" "Bla" "Hallo" "Blubb" "Test"
// b) Lokale Variablen: Sie werden in Klassen, Schleifen, Attribute usw. benutzt
// Globale Variablen: Sie sind im ganzen Code bekannt, also immer sichtbar
// Übergabeparameter: Da werden die benutzten Parameter in den normalen Klammern definiert

// Bei "normalen" Variablen, wie Zahlen und Strings, wird ihnen nur Werte zugewiesen und bei Funktionen wird mehr Anweisungen durchgeführt.
