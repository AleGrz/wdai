import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1.5, 0.1, 5000);

const agh = document.querySelector("#a");
let renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: agh,
  alpha: true,
});

const pmremGenerator = new THREE.PMREMGenerator(renderer);

const hdriLoader = new RGBELoader();
hdriLoader.load("models/rosendal_plains_2_1k.hdr", function (texture) {
  const envMap = pmremGenerator.fromEquirectangular(texture).texture;
  texture.dispose();
  scene.environment = envMap;
});

let pivot = new THREE.Object3D();
pivot.position.set(120, 15, 50);
pivot.add(camera);
camera.position.set(100, 50, 150);
camera.lookAt(pivot.position);

let mouseX = 0;
let mouseY = 0;
const loader = new GLTFLoader();

const o1 = document.getElementById("o1");
const o2 = document.getElementById("o2");
const p1 = new THREE.Vector3(-50, 0, -50);
const p2 = new THREE.Vector3(100, 0, 30);

loader.load(
  "models/agh.glb",
  function (gltf) {
    const agh = gltf.scene;
    scene.add(agh);
    function animate() {
      pivot.rotation.y = mouseX * 0.3;
      pivot.rotation.x = mouseY * 0.3;
      let cameraPos = new THREE.Vector3();
      camera.getWorldPosition(cameraPos);
      camera.lookAt(pivot.position);
      renderer.render(scene, camera);
      renderer.setSize(window.innerHeight * 1.5, window.innerHeight, false);
      updateOverlayPosition(o1, p1);
      updateOverlayPosition(o2, p2);
      requestAnimationFrame(animate);
    }
    animate();
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

document.body.addEventListener("mousemove", onMouseMove);
function onMouseMove(e) {
  mouseX = e.clientX / window.innerWidth - 0.5;
  mouseY = e.clientY / window.innerHeight - 0.5;
}


function updateOverlayPosition(overlay, v) {
  if (window.innerWidth > 1200) {
    const vector = v.clone().project(camera);
    const x =
      window.innerWidth / 2 -
      window.innerHeight * 0.75 +
      (vector.x * 0.5 + 0.5) * window.innerHeight * 1.5; // matematyka to moja pasja
    const y = (vector.y * -0.5 + 0.5) * window.innerHeight;
    overlay.style.transform = `translateY(-100%) translate(${x}px, ${y}px)`;
    overlay.style.top = "0";
    overlay.style.left = "0";
  } else {
    let pos = v.length();
    overlay.style.transform = `translate(-50%, ${pos * 5 - 500}%)`;
    overlay.style.top = "50%";
    overlay.style.left = "50%";
  }
}

