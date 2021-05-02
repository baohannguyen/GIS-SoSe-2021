//b), c), d), e)
let cvs: HTMLCanvasElement = <HTMLCanvasElement>
document.getElementById("rectangles");

let ctx: CanvasRenderingContext2D = cvs.getContext("2d");

interface Rectangle {
    xAxis: number;
    yAxis: number;
    width: number;
    height: number;
}
function createRect(): Rectangle {
    let rectl: Rectangle = {xAxis: Math.random() * 200, yAxis: Math.random() * 200, width: Math.random() * 250, height: Math.random() * 250};
    return rectl;
}
function drawRect(_rectl: Rectangle): void {
    ctx.beginPath();
    ctx.rect(_rectl.xAxis, _rectl.yAxis, _rectl.width, _rectl.height);
    ctx.closePath();
    ctx.stroke();
}
drawRect(createRect());

let rectArr: Rectangle[] = []; 
for (let i: number = 0; i < 3; i++) {
    rectArr.push(createRect()); // fügt dem Array unser Rechteck hinzu
    }
for (let m: number = 0; m < rectArr.length; m++) { 
    drawRect(rectArr[m]); 
}
drawRect(createRect());











