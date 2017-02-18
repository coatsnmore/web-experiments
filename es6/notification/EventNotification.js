class EventNotification {

    constructor() {
        if (Notification.permission !== "granted")
            Notification.requestPermission();
    }

    meow(name) {

        let moniker = name || "stranger";

        if (!Notification) {
            window.alert('Desktop notifications not available in your browser. Try Chromium.');
            return;
        }

        if (Notification.permission !== "granted")
            Notification.requestPermission();
        else {
            var notification = new Notification('MEOW!!!', {
                icon: '../img/A_magical_kitten.png',
                body: `Hey ${moniker}! You've been notified! Meow!`,
            });

            notification.onclick = function () {
                window.open("http://stackoverflow.com/a/13328397/1269037");
            };
        }
    }
}

export default EventNotification;