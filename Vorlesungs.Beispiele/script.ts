console.log("Hello");

let five: number = 5;
console.log(five * five);  // 5*5

let weather: string = "sunny";
console.log(weather); // weather kriegt den Wert "sunny"
weather = "dark";
console.log(weather); // weather kriegt den Wert "dark"

let lukasDebt: number = 1000;
lukasDebt = lukasDebt - 50; //1000-50
console.log(lukasDebt);

let one: number = 1, two: number = 2;
console.log(one + two);

let x: number = Math.max(2, 4); // 4 ist hier die größte Zahl
console.log(x);

console.log(Math.min(2, 4) + 10); // hier wird die kleinste Zahl gesucht -> 2

// let userInput: string = prompt("Pick a number");
// let userNumber: number = Number(userInput);
// console.log("The square of your number is " + userNumber * userNumber);

let input: string = prompt("Command please");
if (input == "test") console.log("This is a test.");
else if (input == "laugh") console.log("Hahahahaa. Ha.");
else if (input == "foo") console.log("bar");
else console.log("I don't know that command.");

switch (input) {
  case "test": {
    console.log("This is a test.");
    break;
  }
  case "laugh": {
    console.log("Hahahahaa. Ha.");
    break;
  }
  default: {
    console.log("I don't know that command.");
  }
}

