console.clear();

// Prima creo e elaboro questo
function preload() {}

//Poi parte questo
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(RGB);
}

function draw() {
  background(255, 204, 0);
  fill(0);

  stroke("red");
  strokeWeight(10);

  translate(width / 2, height / 2);
  rect(0, 0, 500, 500);
  push();
  fill("blue");
  noStroke();
  ellipse(0, 0, 50);
  pop();
}
