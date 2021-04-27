"use strict";
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(10)); // -> 100 
console.log(power(2, 6)); // -> 64
//# sourceMappingURL=script.js.map