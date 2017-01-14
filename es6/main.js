import EventNotification from './EventNotification.js';


// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});


// var Controller = {};
Controller.notify = function (){
    EventNotification.hello();
};

// Test.test();

// asdf