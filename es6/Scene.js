import Player from './Player.js';
import Controls from './Controls.js';
import World from './World.js';

class Scene {

    constructor(domId, width, height) {
        this.controls = new Controls();
        this.width = width;
        this.height = height;

        // builds the webgl renderer if available in browser
        this.renderer = new PIXI.autoDetectRenderer(width, height);
        this.renderer.view.setAttribute('class', 'renderer');

        // attach the scene to the DOM
        let sceneElement = document.getElementById(domId);
        sceneElement.append(this.renderer.view);

        // create stage
        this.stage = new PIXI.Container();

        // add new player to stage
        this.player = new Player(50, 100, 100);
        this.stage.addChild(this.player.graphics);

        // create world and add physics
        this.world = new World(60);
        this.world.addBody(this.player.body);
    }

    tick() {
        // draw
        this.renderer.render(this.stage);
        requestAnimationFrame(this.tick.bind(this));

        // step physics
        this.world.update();

        // update positions of objects in scene
        this.player.update(this.controls.getState(), this.width, this.height);
    }

}

export default Scene;