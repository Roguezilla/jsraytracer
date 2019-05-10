let walls = [];
let p;
let objs = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 5; i++) {
    	let x1 = random(width);
    	let x2 = random(width);
    	let y1 = random(height);
    	let y2 = random(height);
    	walls.push(new Boundary(x1, y1, x2, y2, true));
  	}
  	
  	p = new Particle();

  	for (let i = 0; i < 5; i++) {
    	let x1 = random(width);
    	let y1 = random(height);
    	objs.push(new Obj(x1, y1, 20));
  	}
}

function draw() {
	background(0);
	for(let wall of walls) {
		wall.show(255, 255, 255);
	}
	for(let obj of objs) {
		obj.show()
	}
	p.setPos(mouseX, mouseY);
	p.testHit(walls);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  walls = [];
  for (let i = 0; i < 10; i++) {
  	let x1 = random(width);
  	let x2 = random(width);
  	let y1 = random(height);
  	let y2 = random(height);
  	walls.push(new Boundary(x1, y1, x2, y2, true));
  }
  objs = []
  for (let i = 0; i < 5; i++) {
    let x1 = random(width);
    let y1 = random(height);
    objs.push(new Obj(x1, y1, 20));
  }
}