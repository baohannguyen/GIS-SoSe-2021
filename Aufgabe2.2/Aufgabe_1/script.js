"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    let minnumber = [1, 5, 7, 19, -30];
    function min(_a) {
        let save = _a[0];
        for (let i = 0; i < _a.length; i++) {
            if (_a[i] < save) {
                save = _a[i];
            }
        }
        return save;
    }
    console.log(min(minnumber));
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=script.js.map