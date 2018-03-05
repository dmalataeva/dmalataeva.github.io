var canvas = document.getElementById("canvas-wrapper");

var renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
renderer.setClearColor(0xFFFFFF);

canvas.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = 
new THREE.PerspectiveCamera( 
	10, 
	canvas.offsetWidth / canvas.offsetHeight, 
	0.1, 
	1000 
);
camera.position.z = 15;

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var shape = new THREE.IcosahedronBufferGeometry(1);
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
		refractionRatio: 0.6,
		reflectivity: 0.5 
	}
);
material.envMap.mapping = THREE.CubeRefractionMapping;

var mesh = new THREE.Mesh(shape, material);

var ambient = new THREE.AmbientLight(0xFFFFFF, 0.8);
var light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(-15, 15, 15);

scene.add(camera);
scene.add(mesh);
scene.add(ambient);
scene.add(light);

animateMesh();

function animateMesh() {
	requestAnimationFrame(animateMesh);
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;
	render();
}

function render() {
	renderer.render(scene, camera);
}