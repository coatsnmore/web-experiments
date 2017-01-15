class Controls {

    constructor() {
        this.gamepads = {};
        this.state = {
            left: false,
            right: false,
            up: false,
            down: false
        };

        // setup PC keyboard interaction
        window.addEventListener('keydown', function (e) {
            this.changeControls(e.keyCode, true);
        }.bind(this), false);

        window.addEventListener('keyup', function (e) {
            this.changeControls(e.keyCode, false);
        }.bind(this), false);
    }

    getState() {
        this.queryGamepad();
        return this.state;
    }

    queryGamepad() {
        var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
        for (var i = 0; i < gamepads.length; i++) {
            var gp = gamepads[i];
            if (gp) {
                // UP
                if (gp.buttons[12].pressed){
                    this.state.up = true;
                    console.log('gamepad up');
                } else {
                    this.state.up = false;
                }

                // DOWN
                if (gp.buttons[13].pressed){
                    this.state.down = true;
                    console.log('gamepad down');
                } else {
                    this.state.down = false;
                }

                // RIGHT
                if (gp.buttons[15].pressed){
                    this.state.right = true;
                    console.log('gamepad right');
                } else {
                    this.state.right = false;
                }

                // LEFT
                if (gp.buttons[14].pressed){
                    this.state.left = true;
                    console.log('gamepad left');
                } else {
                    this.state.left = false;
                }
            }
        }
    }

    changeControls(code, state) {

        // console.log('key code: ' + code);
        switch (code) {

            // d-pad
            case 37:
                this.state.left = state;
                break;
            case 39:
                this.state.right = state;
                break;
            case 38:
                this.state.up = state;
                break;
            case 40:
                this.state.down = state;
                break;
        }
    }

}

export default Controls;