import Player from './Player.js';
import KeyBoardController from './KeyBoardController.js';

class Scene {

    constructor(domId, width, height) {
        this.controls = new KeyBoardController();

        // builds the webgl renderer if available
        this.renderer = new PIXI.autoDetectRenderer(width, height);
        this.renderer.view.setAttribute('class', 'renderer');
        let sceneElement = document.getElementById(domId);
        sceneElement.append(this.renderer.view);

        // create stage
        this.stage = new PIXI.Container();

        // add new player to stage
        this.player = new Player(50);
        this.stage.addChild(this.player.graphics);
        this.renderer.render(this.stage);
    }

    tick() {
        this.renderer.render(this.stage);
        requestAnimationFrame(this.tick.bind(this));

        // update positions of objects in scene
        this.player.update(this.controls.state);
    }

}

export default Scene;