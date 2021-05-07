"use strict";
//a)
function backwards(_arrBack) {
    let randomArr = [];
    for (let i = _arrBack.length - 1; i >= 0; i--) { //wird rückwärts gezählt
        randomArr.push(_arrBack[i]);
    }
    return randomArr;
}
console.log(backwards([1, 2, 3, 4, 5]));
//b)
let firstArr = [6, 10, 15, 8];
let secondArr = [10, 4, 27, 9];
firstArr = join(firstArr, secondArr);
function join(_arrOne, _arrTwo) {
    for (let i = 0; i < _arrTwo.length; i++) {
        firstArr.push(_arrTwo[i]); //Zahlen vom 2.Array werden dem 1.Array hinzugefügt
    }
    return firstArr;
}
console.log(firstArr);
function otherjoin(_arrOne, ..._arrTwo) {
    let storageArr = [];
    for (let i = 0; i < _arrOne.length; i++) {
        storageArr = _arrOne;
    }
    for (let i = 0; i < _arrTwo.length; i++) {
        storageArr = _arrOne;
        storageArr.push(_arrTwo[i]);
    }
    return storageArr;
}
console.log(otherjoin([2, 10, 18, 50, 100], 6, 7, 8, 9, 10));
//c)
let splitArr = [2, 6, 10, 18, 35, 47];
function split(_indexOne, _indexTwo, _split) {
    let emptyArr = []; //Speicherplatz erstellen
    for (let j = _indexOne; j <= _indexTwo; j++) {
        emptyArr.push(_split[j]);
    }
    return emptyArr;
}
console.log(split(2, 5, [2, 6, 10, 18, 35, 47]));
//# sourceMappingURL=script.js.map