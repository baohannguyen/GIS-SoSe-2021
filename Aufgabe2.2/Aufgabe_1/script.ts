namespace Aufgabe1 {
    //a)
    function min(..._Arrmin: number[]): number { // 3 Punkte davor und eckige Klammer, weil es zum Array wird
        let storage: number = _Arrmin[0]; //Speicherplatz
        for (let i: number = 0; i < _Arrmin.length; i++) {
            if (_Arrmin[i] < storage) {
                storage = _Arrmin[i];
            }
        }
        return storage;
    }
    console.log(min(10, 50, 3, 6, 30));
}
//b)
function isEven(_nNumber: number): boolean {
    if (_nNumber == 0) {
        return true;
    } 
    if (_nNumber == 1) {
        return false;
    }
    if (_nNumber < 0) { //damit bei negativen Werten kein StackOverflow kommt
        _nNumber = _nNumber + 2;
    } else {
        _nNumber = _nNumber - 2;
    }
    return isEven (_nNumber);
}
console.log(isEven(-8));
// 50 = true
// 75 = false
// -1 = StackOverflow

interface Student {
    name: string;
    matricnumber: number;
    studycourse: string;
}

let stud1: Student = { name: "Melanie", matricnumber: 123456, studycourse: "MIB" };
let stud2: Student = { name: "Peter", matricnumber: 198765, studycourse: "OMB" };
let stud3: Student = { name: "Lotte", matricnumber: 236823, studycourse: "MKB" };

let students: Student[] = [stud1, stud2, stud3, { name: "Luis", matricnumber: 234566, studycourse: "OMB" }];
console.log(students[2].name + " " + students[1].matricnumber + " " + students[0].studycourse);

// function showInfo(_info: Student): void {
for (let information of students) { //mit for of werden die Werte als Liste ausgegeben
        console.log(information);
    }
//     console.log(_info.name + " " + _info.matricnumber + " " + _info.studycourse);

// }
// showInfo(stud1);
// showInfo(stud2);
// showInfo(stud3);

class Student1 {
    name: string;
    matricnumber: number;
    studycourse: string;

    constructor(_name: string, _matricnumber: number = 0, _studycourse: string) {
        this.name = _name;
        this.matricnumber = _matricnumber;
        this.studycourse = _studycourse;
    }
    showInfo(): void {
        console.log(this.name + " " + this.matricnumber + " " + this.studycourse);
    }
}
let s: Student1 = new Student1("Melanie", 123456, "MIB");
s.showInfo();