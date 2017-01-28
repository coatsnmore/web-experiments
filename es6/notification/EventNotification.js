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
                icon: 'http://vignette2.wikia.nocookie.net/rblxofftopic/images/6/67/A_magical_kitten.png/revision/latest?cb=20130730065856',
                body: `Hey ${moniker}! You've been notified! Meow!`,
            });

            notification.onclick = function () {
                window.open("http://stackoverflow.com/a/13328397/1269037");
            };
        }
    }
}

export default EventNotification;