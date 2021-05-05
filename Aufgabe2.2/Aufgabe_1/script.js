"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    //a)
    function min(..._Arrmin) {
        let storage = _Arrmin[0]; //Speicherplatz
        for (let i = 0; i < _Arrmin.length; i++) {
            if (_Arrmin[i] < storage) {
                storage = _Arrmin[i];
            }
        }
        return storage;
    }
    console.log(min(10, 50, 3, 6, 30));
})(Aufgabe1 || (Aufgabe1 = {}));
//b)
function isEven(_nNumber) {
    if (_nNumber == 0) {
        return true;
    }
    if (_nNumber == 1) {
        return false;
    }
    if (_nNumber < 0) { //damit bei negativen Werten kein StackOverflow kommt
        _nNumber = _nNumber + 2;
    }
    else {
        _nNumber = _nNumber - 2;
    }
    return isEven(_nNumber);
}
console.log(isEven(-8));
let stud1 = { name: "Melanie", matricnumber: 123456, studycourse: "MIB" };
let stud2 = { name: "Peter", matricnumber: 198765, studycourse: "OMB" };
let stud3 = { name: "Lotte", matricnumber: 236823, studycourse: "MKB" };
let students = [stud1, stud2, stud3, { name: "Luis", matricnumber: 234566, studycourse: "OMB" }];
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
    constructor(_name, _matricnumber = 0, _studycourse) {
        this.name = _name;
        this.matricnumber = _matricnumber;
        this.studycourse = _studycourse;
    }
    showInfo() {
        console.log(this.name + " " + this.matricnumber + " " + this.studycourse);
    }
}
let s = new Student1("Melanie", 123456, "MIB");
s.showInfo();
//# sourceMappingURL=script.js.map