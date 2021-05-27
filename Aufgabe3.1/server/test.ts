console.log("Hello");

function test(): void {
  let x: number = 10;
  let y: number = 20;
  let a: string[] = ["apfel", "banane", "birne"];

  console.log(a[1], x, y);
}

test();
//Danach hört der Code auf und deswegen crasht die Heroku Seite
//Eigentlich sollte ein Listener da sein