import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCSgHU6fc5_9A49rnxgR6RmB30P-JfXGz8",
	authDomain: "countdown-1523b.firebaseapp.com",
	projectId: "countdown-1523b",
	storageBucket: "countdown-1523b.appspot.com",
	messagingSenderId: "694561636097",
	appId: "1:694561636097:web:435df80455af745b896500",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore().collection("users");
const auth = firebase.auth();

const createdAt = firebase.firestore.FieldValue.serverTimestamp();

export { database, auth, createdAt };
