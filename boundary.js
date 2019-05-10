class Boundary {
	constructor(x1, y1, x2, y2, draw) {
		this.draw = draw
		this.a = createVector(x1, y1);
		this.b = createVector(x2, y2);
	}

	show(r, g, b) {
		if(this.draw) {
			push();
			stroke(r, g, b);
			line(this.a.x, this.a.y, this.b.x, this.b.y);
			pop();
		}
	}
}