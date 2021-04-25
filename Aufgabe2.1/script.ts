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
// b) console.log(h) wird direkt als erstes ausgeführt, danach gehen wir in die funct1() rein, wo console.log("Klar"?) als nächstest auf der Konsole ausgegeben wird
// Am Ende gehen wir aus der funct1() raus und als Letztes wid console.log("Logo!") ausgegeben und danach endet die Ausgabe

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
// Die Zahl 9 wird nach jedem Aufruf um die Zahl 1 veringert bis die Endzahl genauso groß ist wie 0 
// Ausgabe: 9 8 7 6 5 4 3 2 1


//Aufgabe 3 Fehlerfindung für Melanie
//Code von A1
// function b1(): void {
//     let i: string = "Alles";
//     console.log(j);                 Fehler: i anstatt j
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
//     } while ( i > 0):                Fehler: ; statt : -> Syntaxfehler
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


//Aufgabe 4  (x und func2 vom Original-Code hab ich umbenannt, damit keine Fehlermeldung vorkommt)
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
// Zuerst wird "Hallo" ausgegeben, weil "Hallo" in der Variable m gespeichert wurde und dies als erstes ausgegeben wird(siehe Z.110), danach gehen wir zur Funktion funct1(), wo eine neue Variable deklariert wird mit dem Wert "Bla" und die wird als zweites in der Konsole ausgegeben
// Als drittes wird wieder "Hallo" ausgegeben, weil console.log(m) (Z.112) nochmal vorkommt und m noch immer den Wert "Hallo" besitzt. Im nächsten Schritt sind wir in funct2(), wo m den neuen Wert "Blubb" bekommt und dies wir als viertes ausgegeben.
// Zuletzt wird in func3() m nochmal geändert und kriegt den Wert "Test". In dem letzten console.log(m) (Z.115) wird "Test" ausgegeben. 
// b) Lokale Variablen: Sie werden in innerhalb von Klassen, Schleifen, Funktionen, Attribute usw. benutzt
// Globale Variablen: Sie sind im ganzen Code bekannt, also immer sichtbar. D.h. es kann leicht zur Fehlermeldung einer doppelten Funktionsimplementierung kommen, wenn man die selben Variablennamen benutzt 
// Übergabeparameter: Da werden die in den Code benutzten Parameter in den normalen Klammern definiert

// Bei "normalen" Variablen, wie Zahlen und Strings, wird ihnen nur Werte zugewiesen und bei Funktionen wird mehr mit den Werten gearbeitet und Anweisungen durchgeführt.


//Aufgabe 5
//a)
function multiply(): number {
    let _firstnumber: number = 10;
    let _secondnumber: number = 4;
    let result: number = _firstnumber * _secondnumber;
    console.log(result);
    return result; // Ergebnis = 40
}
multiply();

//b)
function max(): number {
let _smallnumber: number = 2;
let _bignumber: number = 10;
if (_smallnumber < _bignumber) {
    console.log(_bignumber);
    return _bignumber;
    } else {
        console.log(_smallnumber);
        return _smallnumber;
    } 
}
max();

//c)
function counter(): number {
let k: number = 1; //fängt bei 1 an
let result: number = 0;
while (k <= 100) { //hört bei 100 auf
   result += k;
   k++;
}
return result;
}
console.log(counter());


//d)
for (let i: number = 0; i < 10; i++) { // i < 10 -> gibt uns 10 Zahlen auf der Konsole aus
    console.log(Math.floor(Math.random() * 100)); // mit Math.floor kriegen wir ganzzahlige Zahlen, sonst werden uns Kommazahlen angezeigt und Math.random * 100, damit wir Zahlen zwischen 1 und 100 kriegen, sonst würden wir nur Zahlen zwischen 0 und 1 kriegen
}

//e)
function factorial(_n: number): number {
let result: number = 1; // Bei der Fakultät ist die Zahl 1 immer da
for (let i: number = 2; i <= _n; i++) {
    result *= i;
}
return result;
}
console.log(factorial(4)); //Ergebnis = 24

//f)
function leapyears(): void {
for (let i: number = 1900; i <= 2021; i++) {
    
    if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) { 
        console.log(i);
    }
}
}
leapyears();


//Aufgabe 6
//a)
function hashtag(): void {
let line: string = ""; // leerer String = neue Zeile
for (let i: number = 0; i < 7; i++) {
    line += "#"; // dem leeren String wird jedes Mal ein "#" hinzugefügt
    console.log(line);
    }
}
hashtag();

//b)
function buzzfizz(): void {
for (let i: number = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i); //Die restlichen Zahlen werden hier ausgegeben
    }
}
}
buzzfizz();

//c) 
function fizzbuzz(): void {
    for (let i: number = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
    }
fizzbuzz();
//hab nur die offentsichliche Lösung

//d)
console.log(chessboard());
function chessboard(): string {
    let hashpattern: string = "";
    for (let line: number = 0; line < 8; line++) { //für die Zeilen
        for (let column: number = 0; column < 8; column++) { // Character innerhalb der Zeile
            if (line % 2 == 0) { // gerade 
                if (column % 2 == 0) { // Zeichen auch für gerade und ungerade Zahlen
                    hashpattern += " ";
                    continue;
                }
                hashpattern += "#";
                continue;
            }
            else if (line % 2 == 1) { // ungerade
                if (column % 2 == 1) { // Zeichen auch für gerade und ungerade Zahlen
                    hashpattern += " ";
                    continue;
                }
                hashpattern += "#";
                continue;
            }
        }
        hashpattern += "\n";
    }
    return hashpattern;
}

chessboard();

//e)
console.log(chessboard1(5, 5));

function chessboard1(_height: number, _width: number): string {
    let hashpattern: string = "";
    for (let line: number = 0; line < _width; line++) {
        for (let column: number = 0; column < _height; column++) {
            if (line % 2 == 0) { // gerade 
                if (column % 2 == 0) { // Zeichen auch für gerade und ungerade Zahlen
                    hashpattern += " ";
                    continue;
                }
                hashpattern += "#";
                continue;
            }
            else if (line % 2 == 1) { // ungerade
                if (column % 2 == 1) { // Zeichen auch für gerade und ungerade Zahlen
                    hashpattern += " ";
                    continue;
                }
                hashpattern += "#";
                continue;
            }
        }
        hashpattern += "\n";
    }
    return hashpattern;
}
