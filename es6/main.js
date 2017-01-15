import EventNotification from './EventNotification.js';
import Scene from './Scene.js';

document.addEventListener('DOMContentLoaded', function () {

    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let eventNotification = new EventNotification();
    let scene = new Scene('scene', width, 300);

    // start this thang!
    scene.tick();

    // connect bundled stuff to DOM controller
    Controller.notify = function () {
        eventNotification.meow();
    };
});


