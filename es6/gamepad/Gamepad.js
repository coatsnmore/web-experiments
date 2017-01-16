class Gamepad {

    constructor() {
        this.gamepads = {};
        this.state = {
            left: false,
            right: false,
            up: false,
            down: false
        };
    }

    getState() {
        this.queryGamepad();
        return this.state;
    }

    queryGamepad() {
        var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
        // query all gamepads
        for (var i = 0; i < gamepads.length; i++) {
            var gp = gamepads[i];
            if (gp) {
                this.state.up = gp.buttons[12].pressed ? true : false;
                this.state.down = gp.buttons[13].pressed ? true : false;
                this.state.right = gp.buttons[15].pressed ? true : false;
                this.state.left = gp.buttons[14].pressed ? true : false;
            }
        }
    }

    connected() {
        var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
        // query all gamepads
        for (var i = 0; i < gamepads.length; i++) {
            var gp = gamepads[i];
            if (gp) {
                return true;
            }
        }

        return false;
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

export default Gamepad;