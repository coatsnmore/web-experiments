class KeyboardController {

    constructor() {
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

    static state() {
        return this.state;
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

export default KeyboardController;