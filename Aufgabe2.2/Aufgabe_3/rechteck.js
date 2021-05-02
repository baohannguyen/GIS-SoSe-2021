"use strict";
//b), c), d), e)
let cvs = document.getElementById("rectangles");
let ctx = cvs.getContext("2d");
function createRect() {
    let rectl = { xAxis: Math.random() * 200, yAxis: Math.random() * 200, width: Math.random() * 250, height: Math.random() * 250 };
    return rectl;
}
function drawRect(_rectl) {
    ctx.beginPath();
    ctx.rect(_rectl.xAxis, _rectl.yAxis, _rectl.width, _rectl.height);
    ctx.closePath();
    ctx.stroke();
}
drawRect(createRect());
let rectArr = [];
for (let i = 0; i < 3; i++) {
    rectArr.push(createRect()); // fügt dem Array unser Rechteck hinzu
}
for (let m = 0; m < rectArr.length; m++) {
    drawRect(rectArr[m]);
}
drawRect(createRect());
//# sourceMappingURL=rechteck.js.map