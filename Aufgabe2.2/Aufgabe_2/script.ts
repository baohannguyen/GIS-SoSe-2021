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
    firstArr.push(); //Zahlen vom 2.Array werden dem 1.Array hinzugefügt
}
return firstArr;
}
console.log(firstArr);

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

