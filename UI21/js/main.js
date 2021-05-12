console.clear();
let posX = 0,
  posY = 0;
let audio = 0;
let amp,
  fft,
  bins = 1024,
  binWidth;

// Prima creo e elaboro questo
function preload() {
  audio = loadSound("audio/song.mp3");
}

//Poi parte questo
function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.mouseClicked(togglePlay);
  fft = new p5.FFT(0, bins);

  binWidth = width / bins;
}

function draw() {
  background(0);
  noStroke();
  const spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    const y = map(spectrum[i], 0, 255, height, 0);
    rect(i * binWidth, y, binWidth, height - y);
  }
}

function togglePlay() {
  if (audio.isPlaying()) {
    audio.pause();
  } else {
    audio.play();
  }
}
