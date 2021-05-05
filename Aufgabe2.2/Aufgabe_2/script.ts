//a)
function backwards(_arrBack: number[]): number[] {
    let randomArr: number[] = [];
    for (let i: number = _arrBack.length - 1; i >= 0; i--) { //wird rückwärts gezählt
        randomArr.push(_arrBack[i]);
    }
    return randomArr;
}
console.log(backwards([1, 2, 3, 4, 5]));


//b)
let firstArr: number[] = [6, 10, 15, 8];
let secondArr: number[] = [10, 4, 27, 9];
firstArr = join(firstArr, secondArr);
function join(_arrOne: number[], _arrTwo: number[]): number[] {
    for (let i: number = 0; i < _arrTwo.length; i++) {
        firstArr.push(_arrTwo[i]); //Zahlen vom 2.Array werden dem 1.Array hinzugefügt
    }
    return firstArr;
}
console.log(firstArr);

function otherjoin(_arrOne: number[], ..._arrTwo: number[]): number[] {
    let storageArr: number [] = [];
    for (let i: number = 0; i < _arrTwo.length; i++) {
        storageArr = _arrOne; // Dem Speicherplatz werden die Werte des 1. Parameters überwiesen
        storageArr.push(_arrTwo[i]); //Zahlen vom 2.Array werden dem 1.Array hinzugefügt
    }
    return storageArr;
}
console.log(otherjoin([2, 10, 18, 50, 100] , 6, 7, 8, 9, 10));

//c)
let splitArr: number[] = [2, 6, 10, 18, 35, 47];
function split(_indexOne: number, _indexTwo: number, _split: number[]): number[] {
    let emptyArr: number[] = []; //Speicherplatz erstellen
    for (let j: number = _indexOne; j <= _indexTwo; j++) {
        emptyArr.push(_split[j]);
    }
    return emptyArr;
}
console.log(split(2, 5, [2, 6, 10, 18, 35, 47]));

