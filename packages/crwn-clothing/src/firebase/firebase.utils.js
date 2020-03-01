import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDgMq8u-SptOun3cktwoEYCndD5VAG6zyE",
    authDomain: "crwn-clothing-fcc52.firebaseapp.com",
    databaseURL: "https://crwn-clothing-fcc52.firebaseio.com",
    projectId: "crwn-clothing-fcc52",
    storageBucket: "crwn-clothing-fcc52.appspot.com",
    messagingSenderId: "856505256273",
    appId: "1:856505256273:web:f3ec3b20152326f4ff2b70",
    measurementId: "G-HD6F7MR8YB"
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...aditionalData
        })
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;