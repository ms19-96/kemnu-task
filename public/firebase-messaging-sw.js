importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBbT2Cgl7nSlv7jyVk-3We33YadTfnGXpg",
    authDomain: "kemnu-ios-android-web-qa.firebaseapp.com",
    databaseURL: "https://kemnu-ios-android-web-qa-default-rtdb.firebaseio.com",
    projectId: "kemnu-ios-android-web-qa",
    storageBucket: "kemnu-ios-android-web-qa.appspot.com",
    messagingSenderId: "157793104674",
    appId: "1:157793104674:web:ac3a7295eb1300f02a6b7b",
    measurementId: "G-N74YN6P78G"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png",
    };
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});
