"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    let minnumber = [1, 5, 7, 19, -30];
    function min(_a) {
        let save = _a[0]; //Speicherplatz
        for (let i = 0; i < _a.length; i++) {
            if (_a[i] < save) {
                save = _a[i];
            }
        }
        return save;
    }
    console.log(min(minnumber));
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
let s1 = { name: "Melanie", matrikelnummer: 123456, studiengang: "MIB" };
let s2 = { name: "Peter", matrikelnummer: 198765, studiengang: "OMB" };
let s3 = { name: "Lotte", matrikelnummer: 236823, studiengang: "MKB" };
let students = [s1, s2, s3, { name: "Luis", matrikelnummer: 234566, studiengang: "OMB" }];
console.log(students[2].name + " " + students[1].matrikelnummer + " " + students[0].studiengang);
function showInfo(_info) {
    console.log(_info.name + " " + _info.matrikelnummer + " " + _info.studiengang);
}
showInfo(s2);
//# sourceMappingURL=script.js.map