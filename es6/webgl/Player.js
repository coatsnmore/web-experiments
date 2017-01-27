class Player {

    constructor(size, x, y) {
        this.size = size;
        this.graphics(x, y);
        this.body(x, y);
        this.speed = 100;
        this.turnSpeed = 2;
        // this.shape();
    }

    graphics(x, y) {
        this.graphics = new PIXI.Container();

        let hull = new PIXI.Graphics();
        this.hull = hull;
        hull.beginFill(0xBAC6D6);
        // player.graphics.lineStyle(5, 0xFF0000);
        hull.moveTo(0, this.size);
        hull.lineTo(0, this.size * (2 / 3));
        hull.lineTo(this.size / 2, 0);
        hull.lineTo(this.size, this.size * (2 / 3));
        hull.lineTo(this.size, this.size);
        hull.lineTo(this.size * (2 / 3), this.size * (2 / 3));
        hull.lineTo(this.size * (1 / 3), this.size * (2 / 3));
        hull.endFill();
        this.graphics.addChildAt(hull, 0);

        let engine = new PIXI.Graphics();
        this.engine = engine;
        engine.beginFill(0xF7ED60);
        // player.graphics.lineStyle(5, 0xFF0000);
        engine.moveTo(this.size * (1 / 3), this.size * (2 / 3));
        engine.lineTo(this.size * (2 / 3), this.size * (2 / 3));
        engine.lineTo(this.size * (1 / 2), this.size);
        engine.endFill();
        engine.alpha = 0;

        this.graphics.addChildAt(engine, 1);

        // position
        this.graphics.x = x;
        this.graphics.y = y;

        // adjust graphics center
        this.graphics.pivot.x = this.size / 2;
        this.graphics.pivot.y = this.size / 2;

        return this.graphics;
    }

    body(x, y) {
        this.body = new p2.Body({
            mass: 1,
            angularVelocity: 0,
            damping: 0,
            angularDamping: 0,
            position: [x, y]
        });

        this.shape = new p2.Box({
            width: this.size,
            height: this.size
        });
        this.body.addShape(this.shape);
        return this.body;
    }

    update(controls, sceneWidth, sceneHeight) {
        // basicContols(controls);

        // player angles
        if (controls.left) {
            this.body.angularVelocity = -1 * this.turnSpeed;
        } else if (controls.right) {
            this.body.angularVelocity = this.turnSpeed;
        } else {
            this.body.angularVelocity = 0;
        }

        // console.log('this.body.angularVelocity: ' + this.body.angularVelocity);

        // velocity
        if (controls.up) {
            let angle = this.body.angle + Math.PI / 2;
            // console.log('angle: ' + angle);
            this.body.force[0] -= this.speed * Math.cos(angle);
            this.body.force[1] -= this.speed * Math.sin(angle);
            this.engine.alpha = 1;
        } else {
            this.engine.alpha = 0;
        }

        // warp player on boundaries
        this.warp(sceneWidth, sceneHeight);

        //update graphics
        this.graphics.x = this.body.position[0];
        this.graphics.y = this.body.position[1];
        this.graphics.rotation = this.body.angle;
    }

    warp(sceneWidth, sceneHeight) {
       
        let x = this.body.position[0],
            y = this.body.position[1];
        if (x < 0) {
            this.body.position[0] = sceneWidth;
        } else if (x > sceneWidth) {
            this.body.position[0] = 0;
        }

        if (y < 0) {
            this.body.position[1] = sceneHeight;
        } else if (y > sceneHeight) {
            this.body.position[1] = 0;
        }
    }

    /**
     * Basic Controls for testing.
     */
    basicContols(controls) {
        if (controls.left) {
            this.graphics.x--;
        } else if (controls.right) {
            this.graphics.x++;
        } else if (controls.up) {
            this.graphics.y--;
        } else if (controls.down) {
            this.graphics.y++;
        }
    }
}

export default Player;