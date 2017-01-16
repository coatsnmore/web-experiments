class World {
    constructor(fps) {
        this.fps = fps || 60;
        this.world = new p2.World({
            gravity: [0, 0]
        });
    }

    addBody(body) {
        this.world.addBody(body);
    }

    update() {
        this.world.step(1 / this.fps)
    }
}

export default World;