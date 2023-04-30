
console.log(process.env.firebaseConfig);

import('firebase/app').then(
    firebase => {
        firebase.initializeApp(process.env.firebaseConfig);

    }
)

export const getFCMToken = async () => {
    let currentToken = '';
    try {
        const { getMessaging, getToken } = await import('firebase/messaging');
        const messaging = getMessaging();
        currentToken = await getToken(messaging,{vapidKey: process.env.FCM_VAPID_KEY});
    } catch (error) {
        console.log('An error occurred while retrieving token.', error);
        return null;
    }
    return currentToken;
};
export const onMessageListener = () =>
    new Promise((resolve) => {
        import('firebase/messaging').then(
            ({ getMessaging, onMessage }) => {
                const messaging = getMessaging();
                console.log('message setup done');
                onMessage(messaging,(payload) => {
                    resolve(payload);
                });
            }
        );

    });
