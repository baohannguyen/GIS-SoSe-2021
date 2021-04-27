function power(base: number, exponent: number = 2): number {
    let result: number = 1;
    for (let count: number = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(10)); // -> 100 
console.log(power(2, 6)); // -> 64