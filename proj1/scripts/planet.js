import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

const planet = document.querySelector("#p");
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: planet,
  alpha: true,
});

var directionalLight = new THREE.DirectionalLight(0xfd7b9e, 20);
directionalLight.position.set(-1, 0.2, -0.4);
scene.add(directionalLight);

camera.position.set(3, 1.5, 4);
camera.rotation.set(-0.6, 0.2, -0.4);

const loader = new GLTFLoader();
loader.load(
  "models/earth.glb",
  function (gltf) {
    const earth = gltf.scene.children[0];
    earth.position.set(3, 0.2, 2.5);
    scene.add(earth);

    function animate() {
      earth.rotation.y += 0.005;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
      renderer.setSize(window.innerHeight, window.innerHeight);
    }
    animate();
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let left = -100;
let right = 100;

const leftElement = document.querySelector("#toleft");
const rightElement = document.querySelector("#toright");

window.addEventListener("scroll", function () {
  var scrollDistance = window.scrollY;
  let scrolled = (scrollDistance - 1000) / 10;
  let scrollLeft = left + scrolled;
  let scrollRight = right - scrolled;
  leftElement.style.transform = `translateX(${scrollLeft}vmax)`;
  rightElement.style.transform = `translateX(${scrollRight}vmax)`;
});
