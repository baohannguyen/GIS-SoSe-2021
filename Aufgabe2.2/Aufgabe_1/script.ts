namespace Aufgabe1 {
    let minArr: number[] = [1, 5, 7, 19, -30];
    function min(_a: number[]): number {
        let storage: number = _a[0]; //Speicherplatz
        for (let i: number = 0; i < _a.length; i++) {
            if (_a[i] < storage) {
                storage = _a[i];

            }
        }
        return storage;
    }
    console.log(min(minArr));
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
console.log(isEven(5));

interface Student {
    name: string;
    matricnumber: number;
    studycourse: string;
}

let stud1: Student = {name: "Melanie", matricnumber: 123456, studycourse: "MIB"};
let stud2: Student = {name: "Peter", matricnumber: 198765, studycourse: "OMB"};
let stud3: Student = {name: "Lotte", matricnumber: 236823, studycourse: "MKB"};

let students: Student[] = [stud1, stud2, stud3, {name: "Luis", matricnumber: 234566, studycourse: "OMB"}];
console.log(students[2].name + " " + students[1].matricnumber + " " + students[0].studycourse);

function showInfo (_info: Student): void {
    console.log(_info.name + " " + _info.matricnumber + " " + _info.studycourse);

}
showInfo(stud1);
showInfo(stud2);
showInfo(stud3);

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
