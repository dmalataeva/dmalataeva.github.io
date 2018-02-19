var renderer = new THREE.WebGLRenderer( { antialias: true } );
var canvas = document.getElementById("canvas-wrapper");
renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
canvas.appendChild(renderer.domElement);

var scene = new THREE.Scene();
renderer.setClearColor(0xFFFFFF);

var camera = 
new THREE.PerspectiveCamera( 
	10, 
	canvas.offsetWidth / canvas.offsetHeight, 
	0.1, 
	1000 
);
camera.position.z = 150;


var shape = new THREE.IcosahedronBufferGeometry(10);
var material = new THREE.MeshPhongMaterial(
	{ 
		color: 0x0088cc, 
		envMap: new THREE.CubeTextureLoader()
					.setPath( './media/cube/' )
					.load( [
					 'car_px.jpg', 
					 'car_nx.jpg', 
					 'car_py.jpg', 
					 'car_ny.jpg', 
					 'car_pz.jpg', 
					 'car_nz.jpg' 
					 ] ), 
		reflectivity: 0.5 
	}
);
var mesh = new THREE.Mesh(shape, material);

var ambient = new THREE.AmbientLight(0xFFFFFF, 1);
var light = new THREE.DirectionalLight(0xFFFFFF, 0.5);
var controls = new THREE.OrbitControls(camera, renderer.domElement);
light.position.set(-15, 15, 15);

scene.add(camera);
scene.add(mesh);
scene.add(ambient);
scene.add(light);

animateMesh();

//console.log("If you see this, I'm working");

function animateMesh() {
	requestAnimationFrame(animateMesh);
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;
	render();
}

function render() {
	renderer.render(scene, camera);
}