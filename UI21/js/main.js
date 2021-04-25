console.clear();
let posX = 0,
  posY = 0;

// Prima creo e elaboro questo
function preload() {}

//Poi parte questo
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(255, 204, 0);

  const mapX = map(mouseX, 0, width, 0, 500);
  const mapY = map(mouseY, 0, height, 0, 500);

  translate(width / 2, height / 2);
  rect(posX, posY, 500, 500);
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      posX -= 10;
      break;

    case RIGHT_ARROW:
      posX += 10;
      break;

    case UP_ARROW:
      posY -= 10;
      break;

    case DOWN_ARROW:
      posY += 10;
      break;

    default:
      break;
  }
}
