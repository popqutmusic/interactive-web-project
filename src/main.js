import * as THREE from 'three'; // Importing Three.js (for module-based setup)

// Set up the canvas and renderer
const canvas = document.getElementById('video-canvas');  // Getting the canvas element from HTML

// Create the WebGL renderer (this attaches Three.js rendering to the canvas)
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(1280, 720);  // Set canvas size to match the display size
renderer.setClearColor(0xeeeeee, 1);  // Optional: Set the background color

// Create a new scene
const scene = new THREE.Scene();

// Create the camera (perspective)
const camera = new THREE.PerspectiveCamera(75, 1280 / 720, 0.1, 1000);  // Aspect ratio is 1280x720
camera.position.z = 5;  // Position the camera to view the cube

// Create a cube geometry (1x1x1) and material (green color)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });  // Green color
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Create an animation loop that continuously updates the cube's rotation and re-renders the scene
function animate() {
  requestAnimationFrame(animate);  // Recurse for continuous animation

  // Rotate the cube on both the x and y axes
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene from the perspective of the camera
  renderer.render(scene, camera);
}

// Start the animation loop
animate();
