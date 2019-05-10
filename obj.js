class Obj {
	constructor(x, y, w) {
		this.pos = createVector(x, y);
		this.w = w;
		walls.push(new Boundary(x, y - w / 2 - 1, x, y + w / 2 + 1, false));
		walls.push(new Boundary(x - w / 2 - 1, y, x + w / 2 + 1, y, false));
	}

	show() {
		push();
		stroke(255);
		circle(this.pos.x, this.pos.y, this.w);
		pop();
	}
}