class Player {

    constructor(size) {
        this.size = size;

        //draw player
        this.graphics = new PIXI.Container();

        var shipHull = new PIXI.Graphics();
        shipHull.beginFill(0xBAC6D6);
        // player.graphics.lineStyle(5, 0xFF0000);
        shipHull.moveTo(0, this.size);
        shipHull.lineTo(0, this.size * (2 / 3));
        shipHull.lineTo(this.size / 2, 0);
        shipHull.lineTo(this.size, this.size * (2 / 3));
        shipHull.lineTo(this.size, this.size);
        shipHull.lineTo(this.size * (2 / 3), this.size * (2 / 3));
        shipHull.lineTo(this.size * (1 / 3), this.size * (2 / 3));
        shipHull.endFill();

        this.graphics.addChildAt(shipHull, 0);
    }

    update(controls) {
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