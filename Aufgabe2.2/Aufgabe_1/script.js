"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    function min(_firstnumber, _secondnumber, _thirdnumber) {
        if (_firstnumber > _secondnumber) {
            return _firstnumber;
        }
        else if (_secondnumber > _thirdnumber) {
            return _secondnumber;
        }
        else {
            return _thirdnumber;
        }
    }
    let minnumber = min(10, 5, 1);
    console.log(minnumber);
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=script.js.map