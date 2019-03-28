const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello, ninjas!");
});

const notificationFactory = (content, user, time) => ({ content, user, time });

const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => {
            console.log('Notification added', doc);
        });
}

exports.projectCreated = functions.firestore
.document('projects/{projectId}')
.onCreate(doc => {
    const project = doc.data();

    return createNotification(
        notificationFactory(
            'added a new project',
            `${project.authorFirstName} ${project.authorLastName}`,
            admin.firestore.FieldValue.serverTimestamp()
        )
    );
});

exports.userJoined = functions.auth
.user()
.onCreate(user => {
    return admin.firestore().collection('users')
        .doc(user.uid).get().then(doc => {
            const newUser = doc.data();

            return createNotification(
                notificationFactory(
                    'joined the party',
                    `${newUser.firstName} ${newUser.lastName}`,
                    admin.firestore.FieldValue.serverTimestamp()
                )
            );
        });
});