namespace Aufgabe1 {
    let minnumber: number[] = [1, 5, 7, 19, -30];
    function min(_a: number[]): number {
        let save: number = _a[0]; //Speicherplatz
        for (let i: number = 0; i < _a.length; i++) {
            if (_a[i] < save) {
                save = _a[i];

            }
        }
        return save;
    }
    console.log(min(minnumber));
}

function isEven(_n: number): boolean {
    let n: number = 0;
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        _n -= 2;
        return isEven(_n);
    }
}
console.log(isEven(6));

interface Student {
    name: string;
    matrikelnummer: number;
    studiengang: string;
}

let s1: Student = {name: "Melanie", matrikelnummer: 123456, studiengang: "MIB"};
let s2: Student = {name: "Peter", matrikelnummer: 098765, studiengang: "OMB"};
let s3: Student = {name: "Lotte", matrikelnummer: 236823, studiengang: "MKB"};

let students: Student[] = [s1, s2, s3, {name: "Luis", matrikelnummer: 234566, studiengang: "OMB"}];
console.log(students[2].name + " " + students[1].matrikelnummer + " " + students[0].studiengang);

function showInfo (_info: Student): void {
    console.log(_info.name + _info.matrikelnummer + _info.studiengang);
    
}
showInfo(s2);