console.clear();
let posX = 0,
  posY = 0;
let audio = 0;
let amp;

// Prima creo e elaboro questo
function preload() {
  audio = loadSound("audio/song.mp3");
}

//Poi parte questo
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  amp = new p5.Amplitude();
  audio.setVolume(0.1);
  audio.pause();
}

function draw() {
  background(0);
  stroke(255);
  translate(0, height / 2);

  const volume = amp.getLevel();

  // const mapW = map(volume, 0, 0.1, 0, 500);
  // rect(posX, posY, mapW, mapW);

  const waveform = audio.getPeaks();
  for (let i = 0; i < waveform.length; i++) {
    line(i, waveform[i] * 100, i, waveform[i] * -10);
  }
}
