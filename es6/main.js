import EventNotification from './EventNotification.js';
import Scene from './Scene.js';
import Synth from './Synth.js';

// wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {

    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let eventNotification = new EventNotification();
    let scene = new Scene('scene', width, 300);
    let synth = new Synth();

    // start this thang!
    scene.tick();

    // connect bundled stuff to DOM controller
    Controller.notify = function () {
        eventNotification.meow();
    };

    Controller.playSong = function () {
        synth.playSong();
    };
});


