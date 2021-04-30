"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    let minArr = [1, 5, 7, 19, -30];
    function min(_a) {
        let storage = _a[0]; //Speicherplatz
        for (let i = 0; i < _a.length; i++) {
            if (_a[i] < storage) {
                storage = _a[i];
            }
        }
        return storage;
    }
    console.log(min(minArr));
})(Aufgabe1 || (Aufgabe1 = {}));
function isEven(_n) {
    let n = 0;
    if (n == 0) {
        return true;
    }
    else if (n == 1) {
        return false;
    }
    else {
        _n -= 2;
        return isEven(_n);
    }
}
console.log(isEven(6));
let stud1 = { name: "Melanie", matricnumber: 123456, studycourse: "MIB" };
let stud2 = { name: "Peter", matricnumber: 198765, studycourse: "OMB" };
let stud3 = { name: "Lotte", matricnumber: 236823, studycourse: "MKB" };
let students = [stud1, stud2, stud3, { name: "Luis", matricnumber: 234566, studycourse: "OMB" }];
console.log(students[2].name + " " + students[1].matricnumber + " " + students[0].studycourse);
function showInfo(_info) {
    console.log(_info.name + " " + _info.matricnumber + " " + _info.studycourse);
}
showInfo(stud1);
showInfo(stud2);
showInfo(stud3);
//# sourceMappingURL=script.js.map