import * as THREE from 'three';
import { GLTFLoader } from './threejs/GLTFLoader.js';
import { OrbitControls } from './threejs/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const point_light = new THREE.PointLight(0xFFFFFF, 15);
point_light.position.x = 2;
point_light.position.y = 2;
point_light.position.z = 2;
scene.add(point_light);

const ambient_light = new THREE.AmbientLight(0xFFDDFF, 0.25);
scene.add(ambient_light);

const controls = new OrbitControls(camera, renderer.domElement);

controls.update();

const loader = new GLTFLoader();

loader.load('sly.glb', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

camera.position.z = 5;

function animate() {
    renderer.render(scene, camera);
    controls.update();
}