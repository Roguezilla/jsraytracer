let walls = [];
let p;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 5; i++) {
    	let x1 = random(width);
    	let x2 = random(width);
    	let y1 = random(height);
    	let y2 = random(height);
    	walls.push(new Boundary(x1, y1, x2, y2));
  	}
  	
  	p = new Particle();
}

function draw() {
	background(0);
	for(let wall of walls) {
		wall.show(255, 255, 255);
	}
	p.setPos(mouseX, mouseY);
	p.show();
	p.testHit(walls);
}