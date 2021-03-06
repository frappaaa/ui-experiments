const section = document.querySelector("section.flag")

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, section.clientWidth / section.clientHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderer.setSize(section.clientWidth, section.clientHeight);
section.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader()

var geometry = new THREE.PlaneGeometry(5, 3, 50, 30);
var material = new THREE.MeshBasicMaterial({
    map: loader.load("../img/pride_flag.png")
});
var flag = new THREE.Mesh(geometry, material);
scene.add(flag);

flag.rotation.set(-1, 0, 0)

camera.position.z = 1.5;
const clock = new THREE.Clock()

function animate() {
    const t = clock.getElapsedTime()
    flag.geometry.vertices.map(v => {
        const waveX1 = 0.5 * Math.sin(v.x * 2 + t * 3)
        const waveX2 = 0.25 * Math.sin(v.x * 1 + t * 2)
        const waveY1 = 0.1 * Math.sin(v.y * 5 + t * 0.5)
        const multi = (v.x + 2.5) / 5
        v.z = (waveX1 + waveX2 + waveY1) * multi
    })

    flag.geometry.verticesNeedUpdate = true
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", function() {
    camera.aspect = section.clientWidth / section.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(section.clientWidth, section.clientHeight);
})