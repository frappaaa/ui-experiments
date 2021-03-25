const section = document.querySelector("section.book");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
section.appendChild(renderer.domElement);

const ambient = new THREE.AmbientLight(0x222222);
scene.add(ambient);

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 0, 6);
scene.add(light);

const loader = new THREE.TextureLoader();

const urls = [
  "assets/img/side_right.png",
  "assets/img/side_left.png",
  "assets/img/up.png",
  "assets/img/down.png",
  "assets/img/front.png",
  "assets/img/back.png",
];

const materials = urls.map((url) => {
  return new THREE.MeshLambertMaterial({
    map: loader.load(url),
  });
});

const geometry = new THREE.BoxGeometry(3.5, 5, 0.5);
const book = new THREE.Mesh(geometry, materials);
scene.add(book);

camera.position.z = 6;

let currentTimeline = window.pageYOffset / 3000;
let aimTimeline = window.pageYOffset / 3000;

function animate() {
  requestAnimationFrame(animate);

  currentTimeline += (aimTimeline - currentTimeline) * 0.1;

  const rx = currentTimeline * -0.5 + 0.5;
  const ry = (currentTimeline * 0.9 + 0.1) * Math.PI * 2;

  book.rotation.set(rx, ry, 0);

  renderer.render(scene, camera);
}
animate();

window.addEventListener("scroll", function () {
  aimTimeline = window.pageYOffset / 3000;
});
