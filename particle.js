class Particle {
	constructor() {
        this.rays = [];
        this.pos = createVector(0, 0);
		for (let a = 0; a < 360; a += 10) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
	}

	setPos(x, y) {
		this.pos.set(x, y);
	}

	testHit(walls) {
        for (let ray of this.rays) {
            let closest = null;
            let max = Infinity;
            for(let wall of walls) {
                const pt = ray.cast(wall);
                if (pt) {
                    fill(255);
                    let dist = p5.Vector.dist(this.pos, pt);
                    if(dist < max) {
                        closest = pt;
                        max = dist;
                    }
                    //add wall highlight
                }
            }
            if(closest) {
                line(this.pos.x, this.pos.y, closest.x, closest.y, 8, 8);
            }
        }
    }

    show() {
        fill(255);
        //ellipse(this.pos.x, this.pos.y, 4);
        for(let ray of this.rays) {
            ray.show();
        }
    }
}