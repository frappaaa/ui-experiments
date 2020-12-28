function setup() {
    createCanvas(500, 500);
    graphic = createGraphics(500, 500);
    graphic.fill("#ef5236");
    graphic.textSize(400);
    graphic.textAlign(CENTER, CENTER);
    graphic.text("01", width / 2, height / 2);

    graphic1 = createGraphics(500, 500);
    graphic1.fill("#ef5236");
    graphic1.textSize(400);
    graphic1.textAlign(CENTER, CENTER);
    graphic1.text("23", width / 2, height / 2);
}

function draw() {
    background("#ecf072");

    let val = sin(frameCount * 0.03) * 250;
    copy(graphic, 0, 0, 250 + val, 500, 0, 0, 250 + val, 500)
    copy(graphic1, 250 + val, 0, 250 - val, 500, 250 + val, 0, 250 - val, 500)
}