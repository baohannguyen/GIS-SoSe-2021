//a)
let randomArr: number[] = [3, 5, 9, 20, 40];
function backwards(): void {
    randomArr.reverse();
}
console.log(randomArr.reverse());

//b)
let firstArr: number [] = [6, 10, 15, 8];
let secondArr: number [] = [10, 4, 27, 9];
firstArr = join(firstArr, secondArr);
function join(_arrOne: number[], _arrTwo: number[]): number[] {
   for (let i: number = 0; i < 1; i++) {
       firstArr.push(10, 4, 27, 9); //Zahlen vom 2.Array werden dem 1.Array drangehängt
   }
   return firstArr;
}
console.log(firstArr);

//c)
let splitArr: number[] = [2, 6, 10, 18, 35, 47];
function split(_indexOne: number[], _indexTwo: number[]): number[] {
    _indexOne = [1];
    _indexTwo = [5];
    for (let k: number = 0; k < 1; k++) {
    splitArr.slice(1, 5);
    }
    return splitArr;
}
console.log(splitArr);

